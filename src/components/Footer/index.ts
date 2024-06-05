import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

const b = block('footer');

export function Footer() {
    return html`<div class="${b()}">
        <div class="${b('item')}">© <span class="${b('l1')}">V</span><span class="${b('l2')}">v</span><span class="${b('l3')}">i</span><span class="${b('l4')}">d</span><span class="${b('l5')}">e</span><span class="${b('l6')}">o</span></div>
        <div class="${b('item', { g: true })}"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="${b('G')}">G</span><span class="${b('i')}">i</span><span class="${b('t')}">t</span><span class="${b('H')}">H</span><span class="${b('u')}">u</span><span class="${b('b')}">b</span></a></div>
    </div>`;
}
