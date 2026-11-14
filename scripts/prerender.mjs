// After `vite build`, write each page's HTML into dist so it is readable before any script runs
// (search engines, link previews, slow phones). React then hydrates it in the browser.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { render, files } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href);
for (const file of files) {
  const path = resolve(root, 'dist', file);
  const html = readFileSync(path, 'utf8');
  writeFileSync(path, html.replace('<!--app-->', render(file)));
  console.log('prerendered', file);
}
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });
