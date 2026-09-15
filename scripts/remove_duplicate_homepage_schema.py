from pathlib import Path

p = Path('reading-library.js')
s = p.read_text(encoding='utf-8')
start_marker = '    const structuredData = {'
end_marker = '    script.textContent = JSON.stringify(structuredData);\n'
start = s.find(start_marker)
if start == -1:
    raise SystemExit('Structured-data start marker not found')
end = s.find(end_marker, start)
if end == -1:
    raise SystemExit('Structured-data end marker not found')
end += len(end_marker)
s = s[:start] + s[end:]
p.write_text(s, encoding='utf-8')
print('Removed duplicate client-side homepage JSON-LD; static schema remains authoritative.')
