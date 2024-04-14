import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

const b = block('footer');

export function Footer() {
    return html`<div class="${b()}">
        <div class="${b('item')}">© Vvideo</div>
        <div class="${b('item')}"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo">GitHub</a></div>
    </div>`;
}
