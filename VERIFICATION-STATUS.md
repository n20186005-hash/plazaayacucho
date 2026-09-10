# Estado de verificación de la entrega

## Comprobaciones de fuente completadas

- `package.json` usa versiones exactas, sin rangos flotantes.
- Node.js y pnpm están fijados en `engines`, `.node-version` y `packageManager`.
- TypeScript 6.0.3 está dentro del rango compatible declarado por `@astrojs/check` 0.9.10 (`^5.0.0 || ^6.0.0`).
- No existe `pnpm-workspace.yaml`.
- El dominio se configura solamente en `astro.config.mjs` (`SITE = 'https://plazaayacucho.com'`) y `@astrojs/sitemap` está habilitado.
- El iframe de Google Maps usa español y región Perú (`es` / `pe`).
- No hay sitemap manual ni valores `lastmod` escritos a mano.
- Logo, favicon SVG, favicon PNG 16×16, 32×32, Apple Touch Icon 180×180 e iconos PWA 192×192 y 512×512 están presentes.
- El sitio público está escrito en español de Perú.
- `node --check` pasó para los archivos JavaScript/MJS propios.
- `node scripts/verify-source.mjs` pasó en este entorno.
- `astro check`, `astro build` y `node scripts/verify-dist.mjs` pasaron en esta sesión con Node.js 24.14.0 (la versión objetivo `engines.node` sigue siendo 24.21.0).

## Entregables SEO/PWA añadidos

- JSON-LD `TouristAttraction` + `LocalBusiness` con `@id`, `image`, `geo`, `hasMap`, `isAccessibleForFree` y `containedInPlace`.
- JSON-LD `FAQPage` con 8 preguntas y `BreadcrumbList` geográfico.
- TDK completo, canonical, Open Graph, Twitter Cards y robots meta.
- NAP visible y coherente con la ficha de Google Maps (`Plaza de Armas of Ayacucho`, `Ayacucho 05003`, `+51 985 928 260`).
- Enlaces `.gob.pe` (MINCETUR, PROMPERÚ) y `.org` (Wikimedia Commons) en la sección de fuentes.
- PWA: `site.webmanifest`, `/sw.js`, iconos 192/512, registro del service worker y `robots.txt` con sitemap.

## Nota para despliegue final

El `pnpm-lock.yaml` generado en esta sesión es real y se puede usar con `--frozen-lockfile` en una máquina con Node.js 24.21.0. En este entorno la instalación requirió desactivar `engine-strict` por tener Node.js 24.14.0; esto no afecta el artefacto compilado.
