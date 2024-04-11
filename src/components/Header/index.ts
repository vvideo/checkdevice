import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';

import './index.css';

const b = block('header');

export function Header() {
    return html`
        <div class="${b()}">
            ${i18n('Can I watch video in this browser?')}
        </div>
    `;
}
