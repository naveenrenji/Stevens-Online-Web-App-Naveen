


export function createPageUrl(pageName: string) {
    const normalized = pageName.trim().toLowerCase();
    if (normalized === 'home' || normalized === '' || normalized === '/') {
        return '/';
    }
    return '/' + normalized.replace(/ /g, '-');
}