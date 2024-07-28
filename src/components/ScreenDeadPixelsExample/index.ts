import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';

import './index.css';

const b = block('screen-dead-pixels-example');

export function ScreenDeadPixelsExample() {
    return html`
        <div class="${b()}">
            <div class="${b('content')}"></div>
            <div class="${b('dpixel1')}"></div>
            <div class="${b('dpixel2')}"></div>
            <div class="${b('dpixel3')}"></div>
        </div>
    `;
}
