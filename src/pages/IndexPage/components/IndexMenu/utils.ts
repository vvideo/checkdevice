import { I18NIndexMenuKeys, I18NKeys } from '../../../../i18n';

export function searchInMenuTitle(keys?: I18NKeys, value?: string) {
    if (!keys || !value) {
        return false;
    }

    const items = Object.keys(keys);
    for (let i = 0; i < items.length; i++) {
        const word = ((keys as Record<string, string>)[items[i]] || '').toLowerCase();
        if (word.search(value) > -1) {
            return true;
        }
    }

    return false;
}

export function searchInMenuList(keys?: I18NIndexMenuKeys, value?: string) {
    if (!keys || !value) {
        return false;
    }

    const items = Object.keys(keys);
    for (let i = 0; i < items.length; i++) {
        const word = ((keys as Record<string, string[]>)[items[i]] || '').join(' ').toLowerCase();
        if (word.search(value) > -1) {
            return true;
        }
    }

    return false;
}
