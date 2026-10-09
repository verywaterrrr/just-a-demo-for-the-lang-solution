import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const site = path.join(root, '_site');
fs.mkdirSync(path.join(site, 'slides'), { recursive: true });
fs.copyFileSync(path.join(root, 'Relay.html'), path.join(site, 'index.html'));
fs.copyFileSync(path.join(root, 'Relay-Slides.html'), path.join(site, 'slides', 'index.html'));
for (const file of ['Relay.html', 'Relay-Slides.html']) {
  fs.copyFileSync(path.join(root, file), path.join(site, file));
}
fs.writeFileSync(path.join(site, '.nojekyll'), '');
console.log('GitHub Pages site prepared in _site/');
