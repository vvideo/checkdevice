export function getLang() {
    let lang = window.appData?.lang || getLangFromUrl() || getLangFromNavigator();

    if (lang !== 'en' && lang !== 'ru') {
        lang = 'en';
    }

    return lang;
}

export function getLangFromNavigator() {
    return ((navigator.language || '').split('-')[0] || 'en');
}

export function getLangFromUrl() {
    const params = window.location.search.slice(1).split('&');

    for (let i = 0; i < params.length; i++) {
        const [name, value] = params[i].split('=');
        if (name === 'lang') {
            return value;
        }
    }

    return '';
}
