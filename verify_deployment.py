import os, re
root = os.getcwd()
public = os.path.join(root, 'public')
missing_images = []
invalid_hrefs = []
image_pattern = re.compile(r'(?:src|pic)=(["\'])(/[^"\']+\.(?:png|jpg|jpeg|webp|svg|gif|avif))\1', re.I)
href_pattern = re.compile(r'href=(["\'])([^"\']+)\1')
for dirpath, dirnames, filenames in os.walk(os.path.join(root, 'src')):
    for filename in filenames:
        if os.path.splitext(filename)[1].lower() not in ['.js', '.jsx', '.ts', '.tsx', '.json']:
            continue
        filepath = os.path.join(dirpath, filename)
        text = open(filepath, 'r', encoding='utf8').read()
        for m in image_pattern.finditer(text):
            rel = m.group(2).lstrip('/')
            fullpath = os.path.join(public, rel)
            if not os.path.exists(fullpath):
                missing_images.append((os.path.relpath(filepath, root).replace('\\', '/'), m.group(2)))
        for m in href_pattern.finditer(text):
            href = m.group(2)
            if href and not href.startswith('/') and not href.startswith('http') and not href.startswith('#'):
                invalid_hrefs.append((os.path.relpath(filepath, root).replace('\\', '/'), href))
print('MISSING_IMAGE_COUNT', len(missing_images))
for file, src in missing_images:
    print('MISSING_IMAGE', file, '=>', src)
print('INVALID_HREF_COUNT', len(invalid_hrefs))
for file, href in invalid_hrefs:
    print('INVALID_HREF', file, '=>', href)
