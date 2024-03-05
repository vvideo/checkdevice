import { i18n } from '../i18n/i18n';

export function getKeySystemsText(keySystems: string[]) {
    if (keySystems.length === 0) {
        return '';
    }

    if (keySystems.length === 1) {
        return `${i18n('Key system')}: ${keySystems[0]}`;
    }

    return `${i18n('Key systems')}: \n` + keySystems.map(item => `• ${item}`).join('\n');
}
