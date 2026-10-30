# Alcance de verificación

La revisión distingue los cambios locales de una publicación verificada. Este documento no acredita un despliegue ni una aceptación visual en producción.

El proyecto conserva sus versiones fijadas y su arquitectura estática. Los comandos requeridos son instalación normal con bloqueo congelado, `pnpm check`, `pnpm build`, `pnpm verify:source`, `pnpm verify:dist` y el ensayo local del comando Wrangler de despliegue.

La aceptación requiere además comprobar el Worker y sus recursos, redirecciones HTTP/host, alias de error con estado 404 y noindex, mapa y vínculos, y la legibilidad de fotografías y créditos a tamaños móvil y escritorio. La analítica debe probarse con rechazo inicial, aceptación, retirada, nueva aceptación y recarga.

La confirmación final corresponde al build oficial del commit publicado y a observaciones del dominio real. La ejecución local y los fixtures no sustituyen esas comprobaciones.
