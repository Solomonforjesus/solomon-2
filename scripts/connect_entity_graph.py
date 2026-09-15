from pathlib import Path
import json, re

p = Path('index.html')
s = p.read_text(encoding='utf-8')

graph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': 'https://www.solomonforjesus.com/#website',
            'url': 'https://www.solomonforjesus.com/',
            'name': 'Solomon For Jesus',
            'alternateName': 'Solomon 2.0',
            'description': 'A free Christian resource offering biblical answers, prayer support, Bible study, Christian articles, and Gospel-centered hope in Jesus Christ.',
            'publisher': {'@id': 'https://www.solomonforjesus.com/#organization'}
        },
        {
            '@type': 'Organization',
            '@id': 'https://www.solomonforjesus.com/#organization',
            'name': 'Solomon For Jesus',
            'alternateName': 'Solomon 2.0',
            'url': 'https://www.solomonforjesus.com/',
            'description': 'A free Christian ministry resource offering Gospel-centered biblical answers, prayer access, Bible learning, Christian reading resources, and connected educational and publishing ministries.',
            'subOrganization': [
                {'@id': 'https://solomonforjesus.net/#organization'},
                {'@id': 'https://solomonforjesus.org/#organization'}
            ]
        }
    ]
}

replacement = '<script id="solomon-homepage-schema" type="application/ld+json">' + json.dumps(graph, separators=(',', ':')) + '</script>'
pattern = r'<script id="solomon-homepage-schema" type="application/ld\+json">.*?</script>'
s2, count = re.subn(pattern, replacement, s, count=1, flags=re.S)
if count != 1:
    raise SystemExit('Could not locate Solomon homepage schema block')
p.write_text(s2, encoding='utf-8')
print('Connected Solomon For Jesus to Academy and Publishing entities.')
