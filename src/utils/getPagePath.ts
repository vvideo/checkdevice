import { getI18nLang } from '../i18n/i18n';

export function getPagePath(id: string) {
    const langPostfix = `?lang=${getI18nLang()}`;

    return id === 'index' ?
        `/${langPostfix}` :
        `${id}.html${langPostfix}`;
}
