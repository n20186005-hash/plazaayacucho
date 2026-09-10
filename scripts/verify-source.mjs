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

const config = fs.readFileSync(path.join(root, 'astro.config.mjs'), 'utf8');
if (!/const SITE = ''/.test(config)) failures.push('El único SITE no está vacío como se espera antes de configurar dominio.');
if (!/SITE \? \[sitemap\(\)\] : \[\]/.test(config)) failures.push('Sitemap no está condicionado por SITE.');
const page = fs.readFileSync(path.join(root, 'src/pages/index.astro'), 'utf8');
if (!page.includes('!1ses!2spe') || !page.includes('!5m2!1ses!2spe')) failures.push('El iframe de Google Maps no está localizado a es/PE.');
if (page.includes('<lastmod>') || /lastmod\s*[:=]/i.test(page)) failures.push('Se encontró lastmod manual.');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('verify:source OK');
