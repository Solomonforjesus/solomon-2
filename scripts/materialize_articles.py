from pathlib import Path
from bs4 import BeautifulSoup
from copy import deepcopy
from html import escape
import json
import re
import unicodedata

SITE = "https://www.solomonforjesus.com"
SHARE_IMAGE = SITE + "/ChatGPT%20Image%20Jun%2027,%202026,%2011_30_33%20AM.png"


def slugify(value):
    value = unicodedata.normalize("NFKD", str(value or "")).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^a-zA-Z0-9]+", "-", value.lower()).strip("-")


def load_slugs():
    sitemap = Path("sitemap.xml").read_text(encoding="utf-8")
    slugs = re.findall(r"https://www\.solomonforjesus\.com/articles/([a-z0-9-]+)/", sitemap)
    if not slugs:
        raise SystemExit("No Reading Library article slugs found in sitemap")
    return slugs


def load_legacy_articles():
    homepage = BeautifulSoup(Path("index.html").read_text(encoding="utf-8"), "html.parser")
    legacy = {}
    for box in homepage.select(".faith-modal .article-modal-box"):
        if box.find_parent(class_="legal-modal-box"):
            continue
        heading = box.find("h2")
        if not heading:
            continue
        slug = slugify(heading.get_text(" ", strip=True))
        clone = deepcopy(box)
        clone_heading = clone.find("h2")
        if clone_heading:
            clone_heading.decompose()
        for selector in [".faith-close", ".article-modal-close", ".article-share-row", "script"]:
            for node in clone.select(selector):
                node.decompose()
        content = "".join(str(node) for node in clone.contents).strip()
        legacy[slug] = {
            "slug": slug,
            "title": heading.get_text(" ", strip=True),
            "category": "Reading Library",
            "content": content,
        }
    return legacy


def style_html():
    soup = BeautifulSoup(Path("article.html").read_text(encoding="utf-8"), "html.parser")
    style = soup.find("style")
    return str(style) if style else ""


def clean_text(value):
    return " ".join(str(value or "").split())


ARTICLE_DESCRIPTIONS = {
    "can-god-forgive-me": "Wondering whether God can forgive your past? Explore biblical teaching on repentance, forgiveness, and the new life offered through faith in Jesus Christ.",
    "is-the-bible-trustworthy": "Explore why Christians trust the Bible: its preservation, historical roots, unified message, and the authority of Scripture centered on Jesus Christ.",
    "who-is-jesus-christ": "Discover who Jesus Christ is: the eternal Son of God, fully God and fully man, the crucified and risen Savior who calls us to repentance and faith.",
    "why-does-god-allow-suffering": "Explore what the Bible says about suffering, grief, human sin, and trusting God, with comfort and resurrection hope found in Jesus Christ.",
    "when-someone-has-hurt-you-deeply": "Find biblical encouragement after deep hurt: God cares for the wounded, forgiveness does not excuse evil, and seeking safety is compatible with faith.",
    "why-jesus-christ-matters": "Explore why Jesus Christ matters for your life and eternity: forgiveness of sin, peace with God, and salvation by grace through faith in the risen Lord.",
    "what-is-the-gospel": "Understand the Gospel: Jesus Christ died for our sins and rose again, offering forgiveness, reconciliation with God, and new life to those who trust Him."
}


def article_description(article, content, title):
    supplied = clean_text(article.get("description"))
    if supplied:
        return supplied
    curated = ARTICLE_DESCRIPTIONS.get(article.get("slug") or slugify(title))
    if curated:
        return curated
    soup = BeautifulSoup(content, "html.parser")
    first_p = soup.find("p")
    excerpt = clean_text(first_p.get_text(" ", strip=True) if first_p else title)
    return excerpt if len(excerpt) <= 155 else excerpt[:152].rstrip() + "..."


def display_date(category, value):
    if not value:
        return category
    try:
        from datetime import date
        parsed = date.fromisoformat(value)
        return f"{category} · {parsed.strftime('%B')} {parsed.day}, {parsed.year}"
    except Exception:
        return category


def build_page(slug, article, shared_style):
    title = clean_text(article.get("title"))
    content = str(article.get("content") or "").strip()
    category = clean_text(article.get("category") or "Reading Library")
    published = clean_text(article.get("date"))
    if not title or not content:
        raise ValueError(f"Article {slug} is incomplete")

    description = article_description(article, content, title)
    url = f"{SITE}/articles/{slug}/"
    page_title = f"{title} | Solomon For Jesus"
    meta_line = display_date(category, published)

    structured = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "url": url,
        "mainEntityOfPage": url,
        "image": SHARE_IMAGE,
        "inLanguage": "en",
        "isAccessibleForFree": True,
        "author": {"@id": SITE + "/#organization"},
        "publisher": {"@id": SITE + "/#organization"},
    }
    if published:
        structured["datePublished"] = published

    article_schema = dict(structured)
    article_schema.pop("@context", None)
    breadcrumb_schema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Solomon For Jesus", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": title, "item": url},
        ],
    }
    structured = {"@context": "https://schema.org", "@graph": [article_schema, breadcrumb_schema]}

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{escape(page_title)}</title>
  <meta name="description" content="{escape(description, quote=True)}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="{url}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Solomon For Jesus">
  <meta property="og:title" content="{escape(page_title, quote=True)}">
  <meta property="og:description" content="{escape(description, quote=True)}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{SHARE_IMAGE}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{escape(page_title, quote=True)}">
  <meta name="twitter:description" content="{escape(description, quote=True)}">
  <meta name="twitter:image" content="{SHARE_IMAGE}">
  <script type="application/ld+json">{json.dumps(structured, ensure_ascii=False, separators=(",", ":"))}</script>
  <script>
    window.va = window.va || function () {{ (window.vaq = window.vaq || []).push(arguments); }};
  </script>
  <script defer src="/_vercel/insights/script.js"></script>
  {shared_style}
</head>
<body>
  <header class="reader-header">
    <div class="reader-header-inner">
      <a class="site-name" href="/">Solomon 2.0</a>
      <a class="back-link" href="/#reading-library">← Back to Reading Library</a>
    </div>
  </header>
  <main>
    <article aria-labelledby="articleTitle">
      <h1 id="articleTitle">{escape(title)}</h1>
      <p id="articleMeta" class="article-meta">{escape(meta_line)}</p>
      <div class="article-share">
        <button type="button" class="share-button" onclick="shareCurrentArticle()">Share This Article</button>
        <span id="shareStatus" class="share-status" role="status" aria-live="polite"></span>
      </div>
      <div id="articleBody" class="article-body">{content}</div>
    </article>
  </main>
  <footer class="reader-footer">Wisdom. Truth. Hope in Jesus Christ. A free Gospel evangelism resource.</footer>
  <script>
    async function shareCurrentArticle() {{
      const shareStatus = document.getElementById("shareStatus");
      const url = window.location.href;
      const title = document.getElementById("articleTitle").textContent.trim();
      const shareText = title + " — Solomon 2.0\\n\\nRead the article here:\\n" + url;
      shareStatus.textContent = "";
      if (navigator.share) {{
        try {{ await navigator.share({{ title, text: shareText, url }}); return; }}
        catch (error) {{ if (error && error.name === "AbortError") return; }}
      }}
      try {{ await navigator.clipboard.writeText(url); shareStatus.textContent = "Link copied."; }}
      catch (error) {{ window.prompt("Copy this link:", url); }}
    }}

    (function installStillTimeReturn() {{
      const key = "solomonStillTimeArticleReturn";
      document.querySelectorAll('#articleBody a[href]').forEach((link) => {{
        let destination;
        try {{ destination = new URL(link.href, window.location.origin); }} catch (error) {{ return; }}
        if (destination.origin !== window.location.origin) return;
        if (destination.searchParams.get("open") !== "stillTimeModal") return;
        link.addEventListener("click", () => {{
          try {{
            sessionStorage.setItem(key, JSON.stringify({{
              url: window.location.pathname + window.location.search + window.location.hash,
              scrollY: Math.max(0, Math.round(window.scrollY)),
              savedAt: Date.now()
            }}));
          }} catch (error) {{}}
        }});
      }});
    }})();
  </script>
</body>
</html>
'''


def main():
    slugs = load_slugs()
    legacy = load_legacy_articles()
    shared_style = style_html()
    generated = []
    missing = []

    for slug in slugs:
        source = Path("articles") / f"{slug}.json"
        if source.exists():
            article = json.loads(source.read_text(encoding="utf-8"))
        else:
            article = legacy.get(slug)
        if not article:
            missing.append(slug)
            continue
        try:
            page = build_page(slug, article, shared_style)
        except ValueError:
            missing.append(slug)
            continue
        output = Path("articles") / slug / "index.html"
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(page, encoding="utf-8")
        generated.append(slug)

    if missing:
        raise SystemExit("Could not materialize: " + ", ".join(missing))

    Path("vercel.json").unlink(missing_ok=True)
    print(f"Materialized {len(generated)} articles: " + ", ".join(generated))


if __name__ == "__main__":
    main()
