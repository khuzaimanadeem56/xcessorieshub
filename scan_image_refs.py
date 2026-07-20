import os, json, re
root = os.getcwd()
public_files = set()
for dirpath, dirnames, filenames in os.walk(os.path.join(root, 'public')):
    for f in filenames:
        rel = os.path.relpath(os.path.join(dirpath, f), root).replace('\\', '/')
        public_files.add(rel)
refs = {}
pattern = re.compile(r'(?:src=|href=|import\s+.*from\s+\")([^\"\)]+\.(?:png|jpg|jpeg|webp|svg|gif|avif))|(?:src=|href=|import\s+.*from\s+\')([^\'\)]+\.(?:png|jpg|jpeg|webp|svg|gif|avif))', re.I)
for dirpath, dirnames, filenames in os.walk(os.path.join(root, 'src')):
    for f in filenames:
        if os.path.splitext(f)[1].lower() in ['.js', '.jsx', '.ts', '.tsx', '.json']:
            path = os.path.join(dirpath, f)
            text = open(path, 'r', encoding='utf8').read()
            for m in pattern.finditer(text):
                ref = (m.group(1) or m.group(2)).strip()
                if not ref:
                    continue
                norm = re.sub(r'^public[\\/]+', '', ref, flags=re.I).replace('\\', '/')
                exists = norm in public_files
                refs.setdefault(os.path.relpath(path, root).replace('\\', '/'), []).append({'ref': ref, 'norm': norm, 'exists': exists})
with open('image_ref_scan.json', 'w', encoding='utf8') as out:
    json.dump({'public_files': sorted(public_files), 'references': refs}, out, indent=2)
print('done')
