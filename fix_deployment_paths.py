import os
import re

root = os.getcwd()
changes = []
pattern = re.compile(r'(?P<prefix>(?:src|href|pic)=)(?P<quote>["\"])(?:public[\\/]+)(?P<path>[^"\']+)(?P=quote)')
route_fixes = {
    'href="log"': 'href="/log"',
    "href='log'": "href='/log'",
    'href="brand"': 'href="/brand"',
    "href='brand'": "href='/brand'",
    'href="smart"': 'href="/smart"',
    "href='smart'": "href='/smart'",
    'href="register"': 'href="/register"',
    "href='register'": "href='/register'",
    'href="findus"': 'href="/findus"',
    "href='findus'": "href='/findus'",
    'href="review"': 'href="/review"',
    "href='review'": "href='/review'",
    'href="explorexhb"': 'href="/explorexhb"',
    "href='explorexhb'": "href='/explorexhb'",
    'href="smartphones"': 'href="/smartphones"',
    "href='smartphones'": "href='/smartphones'",
}
for dirpath, dirnames, filenames in os.walk(os.path.join(root, 'src')):
    for f in filenames:
        if os.path.splitext(f)[1].lower() not in ['.js', '.jsx', '.ts', '.tsx', '.json']:
            continue
        path = os.path.join(dirpath, f)
        text = open(path, 'r', encoding='utf8').read()
        orig = text
        def replace_match(m):
            return f'{m.group("prefix")}{m.group("quote")}/{m.group("path")}{m.group("quote")}'
        text = pattern.sub(replace_match, text)
        for old, new in route_fixes.items():
            text = text.replace(old, new)
        if text != orig:
            open(path, 'w', encoding='utf8').write(text)
            changes.append(os.path.relpath(path, root).replace('\\', '/'))
if changes:
    print('UPDATED', len(changes), 'files')
    print('\n'.join(sorted(set(changes))))
else:
    print('NO CHANGES')
