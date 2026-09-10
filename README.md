# Plaza Mayor de Huamanga — guía web

Sitio turístico independiente en español de Perú para la Plaza Mayor de Huamanga / Plaza de Armas de Ayacucho. El diseño se inspira en los arcos de piedra, la teja de arcilla y los jardines del centro histórico.

## Tecnología fijada

- Astro 7.3.2
- Tailwind CSS 4.3.3 + @tailwindcss/vite 4.3.3
- TypeScript 6.0.3
- @astrojs/check 0.9.10
- @astrojs/sitemap 3.7.4
- Wrangler 4.130.0
- pnpm 12.3.4
- Node.js 24.21.0 LTS

El proyecto es de un solo paquete y no incluye `pnpm-workspace.yaml`.

## Dominio: un único punto de configuración

El dominio público se define solamente en `astro.config.mjs`, constante `SITE`.

Dominio en uso: `https://plazaayacucho.com`.

Con `SITE` configurado:
- canonical, `og:url`, `og:image` y JSON-LD usan URLs absolutas del dominio;
- `@astrojs/sitemap` genera `sitemap-index.xml`;
- se despliega `robots.txt` con la URL del sitemap;
- el registro `site.webmanifest` convierte la guía en una PWA instalable.

## Cloudflare Workers Static Assets

El sitio es estático y se despliega como Static Assets de Cloudflare Workers mediante `wrangler.jsonc`.

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm verify:dist
pnpm deploy
```

## Google Analytics

GA4 `G-HXM22WWPKP` está preparado con consentimiento: el script externo de Google no se inserta hasta que la persona acepta analítica.

## Fotografías

Las cuatro fotografías documentales son fotografías reales verificadas de Wikimedia Commons. Los binarios no pudieron descargarse desde el contenedor actual por bloqueo de red; por eso las URLs originales y licencias están documentadas en `public/images/IMAGE-SOURCES.md` y `PHOTO-DOWNLOAD-LIST.txt`.

## Fuentes editoriales principales

- MINCETUR — Inventario de Recursos Turísticos, ficha Plaza Mayor de Huamanga.
- PROMPERÚ / Y tú qué planes — Plaza Mayor de la Ciudad de Ayacucho.
- Google Maps — ficha, valoración, teléfono y mapa facilitados para este proyecto.
- Wikimedia Commons — documentación fotográfica y licencias.

## Optimizaciones de entidad SEO y PWA

- JSON-LD `TouristAttraction` + `LocalBusiness` con `@id`, `image`, `geo`, `hasMap`, `isAccessibleForFree`, `aggregateRating`, `openingHoursSpecification` y `containedInPlace`.
- JSON-LD `FAQPage` con 8 preguntas y respuestas.
- JSON-LD `BreadcrumbList` de jerarquía geográfica (Plaza → Ciudad → Región → País).
- TDK completo (title, description, robots), canonical absoluto, Open Graph y Twitter Cards con imagen local.
- H1/H2 con el nombre oficial y la ubicación.
- NAP del atractivo visible en el header y el footer; coincide con la ficha de Google Maps.
- Enlaces de autoridad `.gob.pe` (MINCETUR, PROMPERÚ) y `.org` (Wikimedia Commons) en Sources.
- Mapa de Google Maps incrustado y localizado a `es/PE`.
- `robots.txt` con `Allow: /` y sitemap.
- PWA: `site.webmanifest`, service worker `/sw.js`, iconos 192/512 generados, registro en el cliente.
