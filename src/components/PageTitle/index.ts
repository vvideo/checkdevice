import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { VNode } from 'preact';

import './index.css';

interface HeaderProps {
    children: VNode | string;
}

const b = block('page-title');

export function PageTitle(props: HeaderProps) {
    return html`
        <h1 class="${b()}">
            ${props.children}
        </h1>
    `;
}
