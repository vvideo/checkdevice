import { i18n } from '../i18n/i18n';

export function getChecked(checked: boolean) {
    return checked ? '✓' : i18n('No');
}
