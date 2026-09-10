import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
if (!fs.existsSync(dist)) {
  console.error('dist/ no existe. Ejecute pnpm build primero.');
  process.exit(1);
}
const forbidden = [/example\.com/i, /localhost/i, /chrome-extension:\/\//i];
let failures = [];
let sitemapFiles = [];
/** @param {string} dir */
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else {
      const rel = path.relative(dist, p);
      if (/sitemap/i.test(entry.name)) sitemapFiles.push(p);
      if (/\.(?:html|xml|js|css|json|txt|svg)$/i.test(entry.name)) {
        const text = fs.readFileSync(p, 'utf8');
        for (const re of forbidden) if (re.test(text)) failures.push(`${rel} contiene ${re}`);
        if (/lastmod/i.test(text)) failures.push(`${rel} contiene lastmod no permitido`);
      }
    }
  }
}
walk(dist);
const config = fs.readFileSync('astro.config.mjs', 'utf8');
const siteEmpty = /const SITE = ''/.test(config);
if (siteEmpty && sitemapFiles.length) failures.push('SITE está vacío pero se generó sitemap.');
if (!siteEmpty && !sitemapFiles.length) failures.push('SITE configurado pero no se generó sitemap.');
for (const required of ['robots.txt', 'sw.js', 'site.webmanifest', 'index.html']) {
  if (!fs.existsSync(path.join(dist, required))) failures.push(`dist/${required} no se generó.`);
}
const indexHtml = fs.existsSync(path.join(dist, 'index.html')) ? fs.readFileSync(path.join(dist, 'index.html'), 'utf8') : '';
if (indexHtml && !indexHtml.includes('https://plazaayacucho.com')) failures.push('dist/index.html no referencia el dominio de producción.');
if (indexHtml && !indexHtml.includes('rel="manifest"')) failures.push('dist/index.html no incluye el manifest PWA.');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`verify:dist OK${siteEmpty ? ' — SITE vacío, sitemap correctamente ausente' : ' — dominio, sitemap y PWA presentes'}`);
