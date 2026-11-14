// Makes the web copies of the product screenshots the site shows.
// Source: the full-size design exports in "UI Designs Screenshots/" (5120px admin, 786px phone).
// Output: public/shots/<name>-<width>.webp, plus src/data/shots.json (each image's size and widths),
// which <Shot>, <Screen> and <PhoneShot> in src/components/Shot.jsx read.
// Run it again after changing a screenshot or a crop below:  npm run shots
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'UI Designs Screenshots');
const OUT = path.join(root, 'public', 'shots');
const A = 'Admin - Project Bawarchi/';
const C = 'Customer - Project Bawarchi/';

// crop: [left, top, width, height] in the source's pixels; omitted = the whole image.
// The admin screens are 5120 wide; their content area (right of the sidebar) starts at about x 990.
const PHONE = [0, 0, 786, 1704]; // one phone screen's height, from the top
const SHOTS = {
  // admin, whole screens
  dashboard:        { src: A + 'Dashboard-v4.png', crop: [0, 0, 5120, 3328], widths: [960, 1920] },
  orders:           { src: A + 'Order Management - Tabular View.png', crop: [0, 0, 5120, 3328], widths: [960, 1920] },
  'dashboard-full': { src: A + 'Dashboard-v4.png', widths: [800, 1400] },
  // admin, parts of a screen
  'orders-floor':   { src: A + 'Order Management - While hover on table.png', crop: [930, 250, 3270, 2950], widths: [600, 1100] },
  'tables-floor':   { src: A + 'Tables Management - 2D View-1.png', crop: [930, 250, 3220, 2900], widths: [600, 1100] },
  'dash-analytics': { src: A + 'Dashboard-v4.png', crop: [2470, 1290, 2600, 1530], widths: [600, 1000] },
  'dash-inventory': { src: A + 'Dashboard-v4.png', crop: [990, 1290, 1490, 1530], widths: [600] },
  'dash-orders':    { src: A + 'Dashboard-v4.png', crop: [990, 2800, 4080, 2160], widths: [800, 1400] },
  'orders-list':    { src: A + 'Order Management - Tabular View.png', crop: [990, 1300, 4060, 2470], widths: [700, 1200] },
  'table-qr':       { src: A + 'Tables Management - Tabular View - Form - QR code generated.png', crop: [1390, 290, 3370, 2600], widths: [700, 1100] },
  'tables-list':    { src: A + 'Tables Management - Tabular View.png', crop: [930, 0, 4190, 3328], widths: [700, 1200] },
  inventory:        { src: A + 'Inventory Management.png', crop: [930, 290, 4120, 3600], widths: [700, 1100] },
  menu:             { src: A + 'Menu Management - v2.png', crop: [930, 290, 4120, 3800], widths: [700, 1100] },
  'add-dish':       { src: A + 'Menu Management - Adding new Dish - Basic Details.png', crop: [930, 0, 4190, 3328], widths: [700, 1100] },
  // guest's phone, whole screens
  'ph-home':        { src: C + 'Final - Home Page.png', crop: PHONE, widths: [600] },
  'ph-menu':        { src: C + 'Main Menu.png', crop: PHONE, widths: [600] },
  'ph-categories':  { src: C + 'Categories.png', crop: PHONE, widths: [600] },
  'ph-order':       { src: C + 'My Order - Delete active.png', crop: PHONE, widths: [600] },
  'ph-coupon':      { src: C + 'coupon code.png', crop: PHONE, widths: [600] },
  'ph-profile':     { src: C + 'User Profile.png', crop: PHONE, widths: [600] },
  'ph-favs':        { src: C + 'Favorites Page.png', crop: PHONE, widths: [600] },
  'ph-preparing':   { src: C + 'Preparing Order v3.png', crop: PHONE, widths: [600] },
  'ph-served':      { src: C + 'Served Orders.png', crop: PHONE, widths: [600] },
  // guest's phone, parts of a screen
  'start-qr':       { src: C + 'Start Screen.png', crop: [40, 720, 706, 720], widths: [600] },
  pay:              { src: C + 'coupon code.png', crop: [0, 1300, 786, 612], widths: [600] },
};

fs.mkdirSync(OUT, { recursive: true });
const manifest = {};
for (const [name, s] of Object.entries(SHOTS)) {
  const file = path.join(SRC, s.src);
  const meta = await sharp(file).metadata();
  const [left, top, width, height] = s.crop || [0, 0, meta.width, meta.height];
  for (const w of s.widths) {
    await sharp(file)
      .extract({ left, top, width: Math.min(width, meta.width - left), height: Math.min(height, meta.height - top) })
      .resize({ width: w })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  manifest[name] = { w: s.widths.at(-1), h: Math.round((height / width) * s.widths.at(-1)), widths: s.widths };
  process.stdout.write('.');
}
fs.writeFileSync(path.join(root, 'src', 'data', 'shots.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`\n${Object.keys(manifest).length} screenshots written to public/shots/`);
