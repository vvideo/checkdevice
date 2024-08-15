import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n';
import { Link } from '../ui/Link';
import { getPagePath } from '../../utils/getPagePath';

import './index.css';

const b = block('header');

export function Header() {
    return html`
        <header class="${b()}">
            <${Link} theme="white" href="${getPagePath('index')}"><span class="${b('logo')}"></span>${i18n('Check device online')}<//>
        </header>
    `;
}
