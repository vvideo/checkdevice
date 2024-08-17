import { h } from 'preact';

import { i18n } from '../../../../i18n';

interface SecurityLevelsProps {
    items: string[];
}

function getText(items: string[]) {
    const { length } = items;
    if (!length) {
        return `${i18n('Security levels')}: ${i18n('Not detected')}`;
    }

    if (length === 1) {
        return `${i18n('Security level')}: ${items[0]}`;
    }

    return `${i18n('Security levels')}: ${items.join(', ')}`;
}

export function SecurityLevels({ items }: SecurityLevelsProps) {
    return (<span>{getText(items)}</span>);
}
