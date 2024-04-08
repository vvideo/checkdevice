import { i18n } from '../i18n/i18n';

export function getSecurityLevelsText(levels: string[]) {
    if (levels.length === 0) {
        return `${i18n('Security levels')}: ${i18n('Not detected')}`;
    }

    if (levels.length === 1) {
        return `${i18n('Security level')}: ${levels[0]}`;
    }

    return `${i18n('Security levels')}: ${levels.join(', ')}`;
}
