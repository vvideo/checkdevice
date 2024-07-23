import { getI18nLang } from '../i18n/i18n';
import { isSsr } from './isSsr';

export function getPagePath(id: string) {
    const langPostfix = isSsr ? '' : `?lang=${getI18nLang()}`;

    return id === 'index' ?
        `/${langPostfix}` :
        `${id}.html${langPostfix}`;
}
