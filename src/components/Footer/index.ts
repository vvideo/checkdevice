import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n';
import { Link } from '../Link';
import { LangSwitcher } from '../LangSwitcher';

import './index.css';

const b = block('footer');

export function Footer() {
    return html`<footer class="${b()}">
        <div class="${b('item', { report: true })}"><${Link} theme="white" target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues/new">${i18n('Report a bug')}<//></div>
        <div class="${b('item')}"><${LangSwitcher} //></div>
        <div class="${b('item')}">© Vvideo</div>
    </footer>`;
}
