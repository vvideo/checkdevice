import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { VNode } from 'preact';

import './index.css';

interface HeaderProps {
    children: VNode | string;
}

const b = block('header');

export function Header(props: HeaderProps) {
    return html`
        <div class="${b()}">
            ${props.children}
        </div>
    `;
}
