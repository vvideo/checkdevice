import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';
import { i18n } from '../../i18n/i18n';

const b = block('header');

export function Header() {
    return html`
        <div class="${b()}">
            ${i18n('Can I Watch Video')}
        </div>
    `;
}
