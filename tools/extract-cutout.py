"""
Pull the portrait off its studio backdrop into a transparent cut-out.

Re-runnable: reads the source JPEG, writes public/assets/name-cutout.webp.
The source is never modified. Uses rembg (u2net) for the matte — much
cleaner on a low-contrast backdrop than a pure colour-distance flood fill.

Crops to a BUST (head-to-chest), not the full standing figure: the name
strip masks only a thin band at the bottom, so a full-body cut-out hangs
far down into the section below it. Adjust BUST_ASPECT if you swap in a
different photo and the crop looks off.

    pip install rembg onnxruntime --break-system-packages
    python3 tools/extract-cutout.py
"""
from PIL import Image
from rembg import remove, new_session
import os

SRC = 'reference/portrait-source.jpg'
OUT = 'public/assets/name-cutout.webp'
BUST_ASPECT = 0.98  # width / height of the final crop — ~1:1, per the reference

session = new_session('u2net')
src = Image.open(SRC).convert('RGB')
cut = remove(src, session=session)

bbox = cut.split()[3].getbbox()
cut = cut.crop(bbox)

W, H = cut.size
target_h = min(H, int(W / BUST_ASPECT))
cut = cut.crop((0, 0, W, target_h))

cut.save(OUT, quality=92, method=6)
print(f'{OUT}  {cut.size}  aspect {cut.width/cut.height:.3f}  {os.path.getsize(OUT)//1024} KB')
