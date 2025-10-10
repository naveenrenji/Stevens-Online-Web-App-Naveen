


export function createPageUrl(pageName: string) {
    const normalized = (pageName || '').trim().toLowerCase().replace(/\s+/g, '-');
    if (normalized === '' || normalized === '/' || normalized === 'home') {
        return '/';
    }
    return '/' + (normalized.endsWith('/') ? normalized : normalized + '/');
}
// For SEO friendly URLs
// Build an absolute canonical URL with a trailing slash
export function buildCanonicalUrl(pathname: string, siteOrigin: string = 'https://online.stevens.edu') {
    // Ensure pathname starts with '/'
    let path = pathname || '/';
    if (!path.startsWith('/')) {
        path = '/' + path;
    }
    // Normalize: lowercase path and ensure trailing slash for non-root
    const lower = path.toLowerCase();
    const hasTrailing = lower.endsWith('/');
    const normalized = lower === '/' ? '/' : (hasTrailing ? lower : lower + '/');
    // Join with origin
    return siteOrigin.replace(/\/$/, '') + normalized;
}

// Insert or update a JSON-LD script tag by id
export function setJsonLd(scriptId: string, data: unknown) {
    if (typeof document === 'undefined') return;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
}