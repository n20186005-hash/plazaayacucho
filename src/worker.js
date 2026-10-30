/** @param {Request} request @param {any} env */
async function route(request, env) {
  const url = new URL(request.url);
  if (url.hostname === 'www.plazaayacucho.com' || (url.hostname === 'plazaayacucho.com' && url.protocol === 'http:')) {
    url.hostname = 'plazaayacucho.com';
    url.protocol = 'https:';
    return new Response(null, { status: 308, headers: { Location: url.href } });
  }
  const head = request.method === 'HEAD';
  if ((request.method === 'GET' || head) && ['/index', '/index.html'].includes(url.pathname)) {
    url.pathname = '/';
    return new Response(null, { status: 308, headers: { Location: url.href } });
  }
  const errorAlias = /^\/404(?:\/|\.html)?$/.test(url.pathname);
  let response = await env.ASSETS.fetch(request);
  if (errorAlias || response.status === 404) {
    const errorUrl = new URL('/404', url);
    response = await env.ASSETS.fetch(new Request(errorUrl, { method: 'GET', redirect: 'follow' }));
    const headers = new Headers(response.headers);
    headers.delete('Location');
    headers.set('X-Robots-Tag', 'noindex');
    headers.set('Cache-Control', 'no-store');
    return new Response(head ? null : response.body, { status: 404, headers });
  }
  return head ? new Response(null, { status: response.status, headers: response.headers }) : response;
}
export { route };
export default { fetch: route };
