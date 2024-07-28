import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n/i18n';

import './index.css';

interface FontItemProps {
    num: number;
    fullName: string;
    family: string;
    style: string;
}

const b = block('font-item');

export function FontItem(props: FontItemProps) {
    const [opened, setOpened] = useState(false);

    const handleClick = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    return html`<div class="${b({ opened })}">
        <div class="${b('value')}">
            <span class="${b('switcher')}" onClick="${handleClick}">${props.fullName}</span>
            ${opened ? html`<div class="${b('content')}">
                <div class="${b('family')}">${i18n('Family')}: ${props.family}</div>
                <div class="${b('style')}">${i18n('Style')}: ${props.style}</div>
            </div>` : ''}
        </div>
    </div>`;
}