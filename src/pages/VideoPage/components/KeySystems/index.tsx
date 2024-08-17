import { h } from 'preact';

import { i18n } from '../../../../i18n';

interface KeySystemsProps {
    items: string[];
}

export function KeySystems({ items }: KeySystemsProps) {
    if (items.length === 1) {
        return (<span>{i18n('Key system')}: {items[0]}</span>);
    }

    return (<span>{`${i18n('Key systems')}: \n` + items.map(item => `• ${item}`).join('\n')}</span>);
}
