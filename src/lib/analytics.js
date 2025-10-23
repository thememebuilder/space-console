// Safe analytics wiring: opt-in providers. Does not send data unless configured.
// Usage examples:
//  initAnalytics(); // reads Vite env vars: VITE_ANALYTICS_PROVIDER, VITE_PLAUSIBLE_DOMAIN, VITE_VERCEL_SCRIPT
//  initAnalytics({ provider: 'plausible', domain: 'space-console.com' });
//  initAnalytics({ provider: 'vercel', vercelScriptSrc: 'https://example.com/vercel.js' });
export function initAnalytics(config) {
    const provider = config?.provider || import.meta.env.VITE_ANALYTICS_PROVIDER || undefined;
    if (!provider)
        return;
    try {
        if (provider === 'plausible') {
            const domain = config?.domain || import.meta.env.VITE_PLAUSIBLE_DOMAIN || window.__PLAUSIBLE_DOMAIN;
            if (!domain)
                return;
            const script = document.createElement('script');
            script.setAttribute('defer', 'true');
            script.setAttribute('data-domain', domain);
            script.src = 'https://plausible.io/js/plausible.js';
            document.head.appendChild(script);
        }
        if (provider === 'vercel') {
            const src = config?.vercelScriptSrc || import.meta.env.VITE_VERCEL_SCRIPT || window.__VERCEL_SCRIPT_SRC;
            if (!src)
                return;
            const script = document.createElement('script');
            script.setAttribute('defer', 'true');
            script.src = src;
            document.head.appendChild(script);
        }
    }
    catch (e) {
        // intentionally noop: analytics should never break the app
        // console.warn('analytics init failed', e);
    }
}
