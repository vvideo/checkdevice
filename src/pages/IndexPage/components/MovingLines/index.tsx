import { h } from 'preact';

import { block } from '../../../../utils/css/bem';

import './index.css';

const b = block('moving-lines');

export function MovingLines() {
    return (<div class={b()}>
        <div class={b('l1')}></div>
        <div class={b('l2')}></div>
        <div class={b('l3')}></div>
        <div class={b('l4')}></div>
        <div class={b('l5')}></div>
        <div class={b('l6')}></div>
        <div class={b('l7')}></div>
    </div>);
}
