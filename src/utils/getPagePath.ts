import { getI18nLang } from '../i18n/i18n';

export function getPagePath(id: string, lang?: string) {
    return `/${lang || getI18nLang()}/${id}/`;
}
