from PIL import Image

src = r'Context\ILUSTRACIONES-20260405T135916Z-1-001\ACUARELA LUGAR2.png'
dst = r'public\hero-place-transparent.png'
img = Image.open(src).convert('RGBA')
px = img.load()
width, height = img.size

tol = 240
for y in range(height):
    for x in range(width):
        r, g, b, a = px[x, y]
        if r >= tol and g >= tol and b >= tol:
            px[x, y] = (r, g, b, 0)

img.save(dst)
print('saved', dst, 'size', img.size, 'mode', img.mode)
