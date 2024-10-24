import { h } from 'preact';

import { block } from '../../../../utils/css/bem';

import './index.css';

const b = block('cube-3d');

export function Cube3d() {
    return (
        <div class={b()}>
            <h2 class={b('header')}>CSS 3D Transforms</h2>
            <div class={b('container')}>
                <div class={b('side', { back: true })}></div>
                <div class={b('side', { left: true })}></div>
                <div class={b('side', { right: true })}></div>
                <div class={b('side', { top: true })}></div>
                <div class={b('side', { bottom: true })}></div>
                <div class={b('side', { front: true })}></div>
            </div>
        </div>
    );
}
