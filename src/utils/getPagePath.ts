import { getI18nLang } from '../i18n/i18n';

export function getPagePath(id: string) {
    return `${id}.html?lang=${getI18nLang()}`;
}
