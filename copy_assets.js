const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname);
const items = [
  { src: path.join(root, 'Context', 'ILUSTRACIONES-20260405T135916Z-1-001', 'wedding_watercolor_transparent.png'), dst: path.join(root, 'public', 'hero-watercolor.png') },
  { src: path.join(root, 'Context', 'BRANDING-20260405T135929Z-1-001', 'BRANDING', 'MONOGRAMA', 'PNG', 'MONOGRAMA CON FECHA-40.png'), dst: path.join(root, 'public', 'hero-monogram.png') },
];
for (const item of items) {
  const exists = fs.existsSync(item.src);
  console.log('src exists:', item.src, exists);
  if (!exists) continue;
  fs.copyFileSync(item.src, item.dst);
  console.log('copied to', item.dst);
}
console.log('public list:');
console.log(fs.readdirSync(path.join(root, 'public')));
