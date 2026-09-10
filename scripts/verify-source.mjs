import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const skip = new Set(['node_modules', 'dist', '.astro', '.git']);
const forbidden = [/example\.com/i, /localhost/i, /chrome-extension:\/\//i];
const floating = /^(?:latest|\*|\^|~|>|<|>=|<=)/;
let failures = [];

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
for (const group of ['dependencies', 'devDependencies']) {
  for (const [name, version] of Object.entries(pkg[group] ?? {})) {
    if (floating.test(String(version))) failures.push(`${group}.${name} no está fijado: ${version}`);
  }
}
if (pkg.packageManager !== 'pnpm@12.3.4') failures.push('packageManager no coincide con pnpm@12.3.4');
if (pkg.engines?.node !== '24.21.0') failures.push('engines.node no coincide con 24.21.0');
if (fs.existsSync(path.join(root, 'pnpm-workspace.yaml'))) failures.push('No se requiere pnpm-workspace.yaml en este proyecto de un solo paquete.');

/** @param {string} dir */
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name) || entry.name === 'verify-source.mjs' || entry.name === 'verify-dist.mjs') continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(?:astro|mjs|js|ts|css|html|json|jsonc|md|txt|svg)$/i.test(entry.name)) {
      const text = fs.readFileSync(p, 'utf8');
      for (const re of forbidden) if (re.test(text)) failures.push(`${path.relative(root,p)} contiene ${re}`);
    }
  }
}
walk(root);

const EXPECTED_SITE = 'https://plazaayacucho.com';
const config = fs.readFileSync(path.join(root, 'astro.config.mjs'), 'utf8');
if (!config.includes(`const SITE = '${EXPECTED_SITE}'`)) failures.push(`El único SITE debe ser ${EXPECTED_SITE}.`);
if (!/SITE \? \[sitemap\(\)\] : \[\]/.test(config)) failures.push('Sitemap no está condicionado por SITE.');
const page = fs.readFileSync(path.join(root, 'src/pages/index.astro'), 'utf8');
if (!page.includes('!1ses!2spe') || !page.includes('!5m2!1ses!2spe')) failures.push('El iframe de Google Maps no está localizado a es/PE.');
if (page.includes('<lastmod>') || /lastmod\s*[:=]/i.test(page)) failures.push('Se encontró lastmod manual.');

// Enlace de entidad: dominio, nombre oficial, ciudad y jerarquía geográfica.
if (!page.includes('"@id"') || !page.includes('/#attraction')) failures.push('El JSON-LD no define @id anclado al dominio.');
if (!page.includes('Plaza de Armas of Ayacucho')) failures.push('Falta el nombre oficial del atractivo en la página.');
if (!page.includes('"hasMap"') || !page.includes('"isAccessibleForFree"')) failures.push('El JSON-LD no incluye hasMap/isAccessibleForFree.');
if (!page.includes('"@type": \'BreadcrumbList\'') && !page.includes('"@type": "BreadcrumbList"')) failures.push('Falta el BreadcrumbList de jerarquía geográfica.');
if (!page.includes('application/ld+json')) failures.push('No hay datos estructurados JSON-LD.');
if (!page.includes('FAQPage')) failures.push('Falta el FAQPage de datos estructurados.');
// TDK, Open Graph y PWA.
if (!page.includes('rel="canonical"')) failures.push('Falta el canonical.');
if (!page.includes('og:image')) failures.push('Falta og:image.');
if (!page.includes('rel="manifest"')) failures.push('Falta el enlace al manifest PWA.');
if (!page.includes("serviceWorker")) failures.push('Falta el registro del service worker.');
if (!fs.existsSync(path.join(root, 'public/sw.js'))) failures.push('Falta public/sw.js para el soporte PWA.');
if (!fs.existsSync(path.join(root, 'public/robots.txt'))) failures.push('Falta public/robots.txt.');
const robots = fs.existsSync(path.join(root, 'public/robots.txt')) ? fs.readFileSync(path.join(root, 'public/robots.txt'), 'utf8') : '';
if (/Disallow:\s*\/\s*$/m.test(robots)) failures.push('robots.txt bloquea el rastreo global.');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('verify:source OK');
