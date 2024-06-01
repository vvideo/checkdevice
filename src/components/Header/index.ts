import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

interface HeaderProps {
    text: string;
}

const b = block('header');

export function Header(props: HeaderProps) {
    return html`
        <div class="${b()}">
            ${props.text}
        </div>
    `;
}
