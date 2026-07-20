import os
import difflib
root = os.getcwd()
public = os.path.join(root, 'public')
files = [f for f in os.listdir(public) if os.path.isfile(os.path.join(public, f))]
missing = [
    'Baseus-65W-GaN-Charger.webp',
    'Anker-737-Charger.webp',
    'Apple-USB-C-Power-Adapter.webp',
    'Baseus-Lightning-Cable.webp',
    'Anker-Micro-USB-Cable.webp',
    'Xiaomi-USB-C-Cable.webp',
    'Sony-WH-1000XM5.webp',
    'Bose-QuietComfort-45.webp',
    'JBL-Tune-750.webp',
    'Anker-PowerCore-26800.webp',
    'Baseus-30000MAH-Power-Bank.webp',
    'Xiaomi-Mi-Power-Bank.webp',
    'JBL-PartyBox-110.webp',
    'Sony-SRS-XB13.webp',
    'Ultimate-Ears-Boom-3.webp',
    'Apple-iPad-Pro-12.9.webp',
    'iPad-Air-M2.webp',
    'OnePlus-Pad.webp',
]
for m in missing:
    matches = difflib.get_close_matches(m, files, n=10, cutoff=0.5)
    print(f'{m} -> {matches}')
    similar = [f for f in files if m.lower().replace('-', '').replace('.', '').replace(' ', '').replace('_', '') in f.lower().replace('-', '').replace('.', '').replace(' ', '').replace('_', '')]
    print('  direct possible:', similar)
    print()
