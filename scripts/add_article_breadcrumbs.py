from pathlib import Path

p = Path('scripts/materialize_articles.py')
s = p.read_text(encoding='utf-8')
old = '''    if published:\n        structured["datePublished"] = published\n\n    return f\'\'\'<!DOCTYPE html>\n'''
new = '''    if published:\n        structured["datePublished"] = published\n\n    article_schema = dict(structured)\n    article_schema.pop("@context", None)\n    breadcrumb_schema = {\n        "@type": "BreadcrumbList",\n        "itemListElement": [\n            {"@type": "ListItem", "position": 1, "name": "Solomon For Jesus", "item": SITE + "/"},\n            {"@type": "ListItem", "position": 2, "name": title, "item": url},\n        ],\n    }\n    structured = {"@context": "https://schema.org", "@graph": [article_schema, breadcrumb_schema]}\n\n    return f\'\'\'<!DOCTYPE html>\n'''
if old not in s:
    raise SystemExit('Article schema insertion point not found')
p.write_text(s.replace(old, new, 1), encoding='utf-8')
print('Added BreadcrumbList to generated Reading Library article schema.')
