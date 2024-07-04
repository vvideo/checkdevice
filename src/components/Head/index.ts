import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';

import './index.css';

const b = block('head');

export function Head() {
    return html`
        <div class="${b()}">
            <span class="${b('logo')}"></span>${i18n('Check device online')}
        </div>
    `;
}
