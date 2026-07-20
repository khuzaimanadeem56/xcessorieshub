import os
import re

root = os.getcwd()
public_root = os.path.join(root, 'public')
changed_files = set()

# Replace public paths in strings and fix bare relative route hrefs.
public_path_pattern = re.compile(r'(["\'])(?:public[\\/]+)([^"\']+)(["\'])')
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
    'href="airpods"': 'href="/airpods"',
    "href='airpods'": "href='/airpods'",
    'href="smartwatches"': 'href="/smartwatches"',
    "href='smartwatches'": "href='/smartwatches'",
    'href="powerbanks"': 'href="/powerbanks"',
    "href='powerbanks'": "href='/powerbanks'",
    'href="datacables"': 'href="/datacables"',
    "href='datacables'": "href='/datacables'",
    'href="headphones"': 'href="/headphones"',
    "href='headphones'": "href='/headphones'",
    'href="speakers"': 'href="/speakers"',
    "href='speakers'": "href='/speakers'",
    'href="tablets"': 'href="/tablets"',
    "href='tablets'": "href='/tablets'",
    'href="chargers"': 'href="/chargers"',
    "href='chargers'": "href='/chargers'",
}

for dirpath, dirnames, filenames in os.walk(os.path.join(root, 'src')):
    for filename in filenames:
        if os.path.splitext(filename)[1].lower() not in ['.js', '.jsx', '.ts', '.tsx', '.json']:
            continue
        file_path = os.path.join(dirpath, filename)
        with open(file_path, 'r', encoding='utf8') as f:
            content = f.read()

        new_content = public_path_pattern.sub(r"\1/\2\3", content)
        for old, new in route_fixes.items():
            new_content = new_content.replace(old, new)

        if new_content != content:
            with open(file_path, 'w', encoding='utf8') as f:
                f.write(new_content)
            changed_files.add(os.path.relpath(file_path, root).replace('\\', '/'))

missing_refs = []
# Now verify normalized public refs exist
image_pattern = re.compile(r'(?:src|pic)=(["\'])(/[^"\']+\.(?:png|jpg|jpeg|webp|svg|gif|avif))\1', re.I)
for dirpath, dirnames, filenames in os.walk(os.path.join(root, 'src')):
    for filename in filenames:
        if os.path.splitext(filename)[1].lower() not in ['.js', '.jsx', '.ts', '.tsx', '.json']:
            continue
        file_path = os.path.join(dirpath, filename)
        text = open(file_path, 'r', encoding='utf8').read()
        for m in image_pattern.finditer(text):
            rel_path = m.group(2).lstrip('/')
            if not os.path.exists(os.path.join(public_root, rel_path)):
                missing_refs.append((os.path.relpath(file_path, root).replace('\\', '/'), m.group(2)))

if changed_files:
    print('UPDATED FILES:')
    for f in sorted(changed_files):
        print(f)
else:
    print('NO FILES CHANGED')

if missing_refs:
    print('\nMISSING IMAGE REFERENCES:')
    for file, ref in missing_refs:
        print(file, '=>', ref)
    print('TOTAL MISSING', len(missing_refs))
else:
    print('\nNO MISSING PUBLIC IMAGE REFERENCES')
