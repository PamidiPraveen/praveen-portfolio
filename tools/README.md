`extract-cutout.py` regenerates `/public/assets/name-cutout.webp` from a
source photo. It expects a full-body studio photo at
`reference/portrait-source.jpg` (not included here to keep this zip small)
— drop one in and rerun:

    pip install rembg onnxruntime --break-system-packages
    python3 tools/extract-cutout.py
