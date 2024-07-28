import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { VNode } from 'preact';

import './index.css';

const b = block('column');

interface ColumnProps {
    name: string;
    children: VNode;
}

export function Column(props: ColumnProps) {
    return html`<div class="${b()}">
        <div class="${b('category')}">${props.name}</div>
        <div class="${b('body')}">${props.children}</div>
    </div>`;
}