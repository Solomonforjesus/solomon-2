from pathlib import Path

p = Path('trivia/index.html')
s = p.read_text(encoding='utf-8')
if 'rel="canonical"' in s:
    print('Trivia SEO metadata already present.')
    raise SystemExit(0)
marker = '  <title>Bible Trivia with Solomon</title>\n'
addition = '''  <title>Bible Trivia with Solomon | Free Family Bible Game</title>
  <link rel="canonical" href="https://www.solomonforjesus.com/trivia/" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Solomon For Jesus" />
  <meta property="og:title" content="Bible Trivia with Solomon | Free Family Bible Game" />
  <meta property="og:description" content="A free, family-friendly Bible trivia game from Solomon For Jesus, designed especially for children and families." />
  <meta property="og:url" content="https://www.solomonforjesus.com/trivia/" />
  <meta property="og:image" content="https://www.solomonforjesus.com/ChatGPT%20Image%20Jun%2027,%202026,%2011_30_33%20AM.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bible Trivia with Solomon | Free Family Bible Game" />
  <meta name="twitter:description" content="A free, family-friendly Bible trivia game from Solomon For Jesus, designed especially for children and families." />
  <meta name="twitter:image" content="https://www.solomonforjesus.com/ChatGPT%20Image%20Jun%2027,%202026,%2011_30_33%20AM.png" />
'''
if marker not in s:
    raise SystemExit('Trivia title marker not found')
p.write_text(s.replace(marker, addition, 1), encoding='utf-8')
print('Upgraded Bible Trivia canonical, robots, and social metadata.')
