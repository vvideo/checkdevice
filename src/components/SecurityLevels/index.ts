import { i18n } from '../../i18n/i18n';

interface SecurityLevelsProps {
    items: string[];
}

export function SecurityLevels({ items }: SecurityLevelsProps) {
    const { length } = items;
    if (!length) {
        return `${i18n('Security levels')}: ${i18n('Not detected')}`;
    }

    if (length === 1) {
        return `${i18n('Security level')}: ${items[0]}`;
    }

    return `${i18n('Security levels')}: ${items.join(', ')}`;
}
