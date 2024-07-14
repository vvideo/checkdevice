import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { Link } from '../Link';

import './index.css';

const b = block('header');

export function Header() {
    return html`
        <header class="${b()}">
            <${Link} theme="white" href="/"><span class="${b('logo')}"></span>${i18n('Check device online')}<//>
        </header>
    `;
}
