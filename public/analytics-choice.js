(() => {
  const analyticsWindow = /** @type {any} */ (window);
  const measurementId = 'G-HXM22WWPKP';
  const banner = document.querySelector('#cookie-banner');
  const open = document.querySelector('#cookie-settings');
  banner?.removeAttribute('hidden');
  let loaded = false;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = analyticsWindow.gtag || function () { analyticsWindow.dataLayer.push(arguments); };
  analyticsWindow['ga-disable-' + measurementId] = true;
  analyticsWindow.gtag('consent', 'default', { analytics_storage: 'denied' });
  /** @param {boolean} granted */
  const choose = (granted) => {
    analyticsWindow['ga-disable-' + measurementId] = !granted;
    analyticsWindow.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    if (granted && !loaded) {
      loaded = true;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.dataset.ga4 = measurementId;
      document.head.appendChild(script);
      analyticsWindow.gtag('js', new Date());
      analyticsWindow.gtag('config', measurementId);
    }
    banner?.setAttribute('hidden', '');
    open?.removeAttribute('hidden');
  };
  document.querySelector('#cookie-accept')?.addEventListener('click', () => choose(true));
  document.querySelector('#cookie-reject')?.addEventListener('click', () => choose(false));
  open?.addEventListener('click', () => {
    banner?.removeAttribute('hidden');
    open.setAttribute('hidden', '');
  });
})();
