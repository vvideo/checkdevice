import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

const b = block('header');

export function Header() {
    return html`
        <div class="${b()}">
            Can I\u00a0Watch Video
        </div>
    `;
}
