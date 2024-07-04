import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';

import './index.css';

const b = block('footer');

export function Footer() {
    return html`<div class="${b()}">
        <div class="${b('item')}">© <span class="${b('l1')}">V</span><span class="${b('l2')}">v</span><span class="${b('l3')}">i</span><span class="${b('l4')}">d</span><span class="${b('l5')}">e</span><span class="${b('l6')}">o</span></div>
        <div class="${b('item', { g: true })}"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">${i18n('Report a bug')}</a></div>
    </div>`;
}
