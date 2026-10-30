# Plaza Mayor de Ayacucho

Guía independiente, sin fines de lucro y no oficial para información turística y divulgación cultural, en español de Perú. Plaza Mayor de Ayacucho, Plaza Mayor de Huamanga y Plaza de Armas identifican el mismo lugar según la ficha de MINCETUR.

Astro 7.3.2 estático, Tailwind 4.3.3, TypeScript 6.0.3, Wrangler 4.130.0, Node 24.21.0 y pnpm 12.3.4. Las dependencias permanecen fijadas. `pnpm-workspace.yaml` permite únicamente las versiones bloqueadas de los scripts nativos necesarios.

Instalar con `pnpm install --frozen-lockfile`; ejecutar `pnpm check`, `pnpm build`, `pnpm verify:source` y `pnpm verify:dist`. `wrangler deploy --dry-run` comprueba el empaquetado local. El Worker existente se llama `plazaayacucho`; no se crean dominios ni bindings adicionales durante estas comprobaciones.

`astro.config.mjs` define el dominio canónico https://plazaayacucho.com. La entrada Worker normaliza HTTP, el alias www contemplado en la configuración anterior y los alias index, conservando ruta y consulta. Los errores y sus alias mantienen estado 404 y noindex. La anterior tabla de redirecciones con URLs de origen absolutas se sustituye por esta entrada; no se publica un `_redirects` inválido.

Las fotografías históricas locales conservan autor, fuente, licencia, fecha y aviso de encuadre en la página. Los horarios de Maps y MINCETUR se atribuyen con su alcance; la guía no promete acceso sin restricciones. Los museos, templos y excursiones regionales tienen condiciones propias.

La analítica empieza desactivada y su elección se limita a la página actual; puede retirarse o volver a aceptarse desde el control existente sin duplicar el cargador. No se guarda esa elección. Google Maps y cualquier medición independiente del alojamiento se explican por separado.
