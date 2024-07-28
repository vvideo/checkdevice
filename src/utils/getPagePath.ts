import { getI18nLang } from '../i18n';

export function getPagePath(id: string, lang?: string) {
    const idPath = id === 'index' ? '' : (id + '/');
    return `/${lang || getI18nLang()}/${idPath}`;
}
