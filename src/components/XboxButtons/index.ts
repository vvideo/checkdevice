import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

const b = block('xbox-buttons');

export function XboxButtons() {
    return html`<div class="${b()}">
        <div class="${b('x')}">X</div>
        <div class="${b('y')}">Y</div>
        <div class="${b('a')}">A</div>
        <div class="${b('b')}">B</div>
    </div>`;
}