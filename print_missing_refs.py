import json
with open('image_ref_scan.json', 'r', encoding='utf8') as f:
    data = json.load(f)
missing = []
for file, refs in data['references'].items():
    for item in refs:
        if not item['exists']:
            missing.append((file, item['ref'], item['norm']))
missing.sort()
for file, ref, norm in missing:
    print(f"{file} -> {ref} => {norm}")
print('MISSING COUNT:', len(missing))
