import { i18n } from '../i18n/i18n';

export function formatBytesToGB(bytes: number) {
    const result = Math.floor(bytes / 1024 / 1024 / 1024 * 100) / 100;

    return `${result} ${i18n('GB')}`;
}
