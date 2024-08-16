import { h } from 'preact';
import { block } from '../../utils/css/bem';

import './index.css';

const b = block('xbox-buttons');

export function XboxButtons() {
    return (<div class={b()}>
        <div class={b('x')}>X</div>
        <div class={b('y')}>Y</div>
        <div class={b('a')}>A</div>
        <div class={b('b')}>B</div>
    </div>);
}