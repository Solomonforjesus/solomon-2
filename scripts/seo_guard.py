from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import json
import re
import sys

HOST = "www.solomonforjesus.com"
BASE = f"https://{HOST}"
SITEMAP_URL = BASE + "/sitemap.xml"
ORG_ID = BASE + "/#organization"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.in_title = False
        self.title = []
        self.description = None
        self.robots = None
        self.canonical = None
        self.in_jsonld = False
        self.jsonld_buffer = []
        self.jsonld = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self.in_title = True
        elif tag == "meta":
            name = attrs.get("name", "").lower()
            if name == "description":
                self.description = attrs.get("content", "").strip()
            elif name == "robots":
                self.robots = attrs.get("content", "").strip().lower()
        elif tag == "link" and "canonical" in attrs.get("rel", "").lower().split():
            self.canonical = attrs.get("href", "").strip()
        elif tag == "script" and attrs.get("type", "").lower() == "application/ld+json":
            self.in_jsonld = True
            self.jsonld_buffer = []

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag == "script" and self.in_jsonld:
            self.in_jsonld = False
            self.jsonld.append("".join(self.jsonld_buffer).strip())
            self.jsonld_buffer = []

    def handle_data(self, data):
        if self.in_title:
            self.title.append(data)
        if self.in_jsonld:
            self.jsonld_buffer.append(data)


def local_file(url):
    path = urlparse(url).path
    if path == "/":
        return Path("index.html")
    return Path(path.strip("/")) / "index.html"


def collect_types(value, found=None):
    found = found or set()
    if isinstance(value, dict):
        t = value.get("@type")
        if isinstance(t, str):
            found.add(t)
        elif isinstance(t, list):
            found.update(x for x in t if isinstance(x, str))
        for child in value.values():
            collect_types(child, found)
    elif isinstance(value, list):
        for child in value:
            collect_types(child, found)
    return found


def collect_ids(value, found=None):
    found = found or set()
    if isinstance(value, dict):
        if isinstance(value.get("@id"), str):
            found.add(value["@id"])
        for child in value.values():
            collect_ids(child, found)
    elif isinstance(value, list):
        for child in value:
            collect_ids(child, found)
    return found


def fail(errors, message):
    errors.append(message)


def main():
    errors = []
    sitemap_path = Path("sitemap.xml")
    robots_path = Path("robots.txt")
    if not sitemap_path.exists():
        fail(errors, "Missing sitemap.xml")
    if not robots_path.exists():
        fail(errors, "Missing robots.txt")
    if errors:
        finish(errors)

    sitemap = sitemap_path.read_text(encoding="utf-8")
    urls = re.findall(r"<loc>\s*(.*?)\s*</loc>", sitemap)
    if not urls:
        fail(errors, "Sitemap contains no <loc> URLs")
    if len(urls) != len(set(urls)):
        fail(errors, "Sitemap contains duplicate URLs")

    for url in urls:
        parsed_url = urlparse(url)
        if parsed_url.scheme != "https" or parsed_url.netloc != HOST:
            fail(errors, f"Sitemap URL is outside canonical host: {url}")
            continue
        file_path = local_file(url)
        if not file_path.exists():
            fail(errors, f"Sitemap URL has no static page: {url} -> {file_path}")
            continue

        parser = PageParser()
        parser.feed(file_path.read_text(encoding="utf-8"))
        title = " ".join("".join(parser.title).split())
        if not title:
            fail(errors, f"Missing <title>: {file_path}")
        if not parser.description:
            fail(errors, f"Missing meta description: {file_path}")
        if parser.canonical != url:
            fail(errors, f"Canonical mismatch: {file_path} expected {url!r}, found {parser.canonical!r}")
        if parser.robots is None:
            fail(errors, f"Missing robots meta: {file_path}")
        elif "noindex" in parser.robots:
            fail(errors, f"Public sitemap page is noindex: {file_path}")

        parsed_json = []
        for block in parser.jsonld:
            if not block:
                continue
            try:
                parsed_json.append(json.loads(block))
            except json.JSONDecodeError as exc:
                fail(errors, f"Invalid JSON-LD in {file_path}: {exc}")

        path = parsed_url.path
        needs_schema = path == "/" or path.startswith("/articles/")
        if needs_schema and not parsed_json:
            fail(errors, f"Missing JSON-LD on structured public page: {file_path}")
        types = set()
        ids = set()
        for data in parsed_json:
            types.update(collect_types(data))
            ids.update(collect_ids(data))

        if path == "/":
            for required in ("WebSite", "Organization"):
                if required not in types:
                    fail(errors, f"Homepage missing {required} schema")
            if ORG_ID not in ids:
                fail(errors, f"Homepage missing canonical Solomon Organization @id {ORG_ID}")
        elif path.startswith("/articles/"):
            for required in ("Article", "BreadcrumbList"):
                if required not in types:
                    fail(errors, f"{file_path} missing {required} schema")
            if ORG_ID not in ids:
                fail(errors, f"{file_path} does not reference canonical Solomon Organization @id")

    robots = robots_path.read_text(encoding="utf-8")
    if "User-agent: OAI-SearchBot" not in robots:
        fail(errors, "robots.txt no longer explicitly allows OAI-SearchBot")
    if "Disallow: /api/" not in robots:
        fail(errors, "robots.txt no longer protects /api/")
    if f"Sitemap: {SITEMAP_URL}" not in robots:
        fail(errors, "robots.txt sitemap declaration is missing or incorrect")

    finish(errors)


def finish(errors):
    if errors:
        print("SEO GUARD FAILED")
        for error in errors:
            print(" -", error)
        sys.exit(1)
    print("SEO guard passed: sitemap, canonicals, indexability, JSON-LD, entity references, and robots directives are consistent.")


if __name__ == "__main__":
    main()
