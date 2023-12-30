import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

const b = block('header');

export function Header() {
    return html`
        <div class="${b()}">
            Can I Watch Video<span class="${b('beta-container')}"><span class="${b('beta')}">beta</span></span>
        </div>
    `;
}
