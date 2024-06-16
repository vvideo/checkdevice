import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

const b = block('cube-3d');

export function Cube3d() {
    return html`
    <div class="${b()}">
        <div class="${b('container')}">
            <div class="${b('side', { back: true })}"></div>
            <div class="${b('side', { left: true })}"></div>
            <div class="${b('side', { right: true })}"></div>
            <div class="${b('side', { top: true })}"></div>
            <div class="${b('side', { bottom: true })}"></div>
            <div class="${b('side', { front: true })}"></div>
        </div>
    </div>`;
}
