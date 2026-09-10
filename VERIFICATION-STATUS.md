# Estado de verificación de la entrega

## Comprobaciones de fuente completadas

- `package.json` usa versiones exactas, sin rangos flotantes.
- Node.js y pnpm están fijados en `engines`, `.node-version` y `packageManager`.
- TypeScript 6.0.3 está dentro del rango compatible declarado por `@astrojs/check` 0.9.10 (`^5.0.0 || ^6.0.0`).
- No existe `pnpm-workspace.yaml`.
- El dominio se configura solamente en `astro.config.mjs` y sitemap queda condicionado a un `SITE` real.
- El iframe de Google Maps usa español y región Perú (`es` / `pe`).
- No hay sitemap manual ni valores `lastmod` escritos a mano.
- Logo, favicon SVG, favicon PNG 16×16, 32×32 y Apple Touch Icon 180×180 están presentes y usan el mismo símbolo.
- El sitio público está escrito en español de Perú.
- `node --check` pasó para los archivos JavaScript/MJS propios.
- `node scripts/verify-source.mjs` pasó en este entorno.

## Limitación del entorno actual

El contenedor no puede resolver el registro de npm ni descargar binarios externos. Corepack falla al intentar obtener la versión fijada de pnpm antes de que pueda ejecutarse la instalación. Por este motivo no es posible afirmar que la secuencia limpia solicitada haya pasado dentro de esta sesión.

Tampoco se fabrica un `pnpm-lock.yaml` incompleto: un lockfile manual sin resolución real de pnpm sería engañoso y podría romper `--frozen-lockfile`.

En una máquina con acceso al registro se debe ejecutar:

```bash
corepack enable
corepack pnpm install
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm verify:dist
```

Solo después de esa secuencia debe considerarse verificada la compilación final.
