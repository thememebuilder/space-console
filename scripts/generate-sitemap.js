// Simple sitemap generator used during build (ESM)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = ['/', '/about', '/contact'];
const base = 'https://space-console.com';

const urlset = routes
  .map((r) => `  <url>\n    <loc>${base}${r}</loc>\n    <priority>${r === '/' ? '1.0' : '0.8'}</priority>\n  </url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, xml, 'utf8');
console.log('sitemap generated:', outPath);
