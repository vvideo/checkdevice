import { html } from 'htm/preact';
import { VNode } from 'preact';
import { block } from '../../utils/bem';

import './index.css';

interface WarningMessageProps {
    theme?: 'gray'
    children: VNode | string;
}

const b = block('warning-message');

export function WarningMessage(props: WarningMessageProps) {
    return html`<span class="${b({ theme: props.theme })}">⚠️ ${props.children}</span>`;
}
