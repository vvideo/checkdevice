import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { VNode } from 'preact';

import './index.css';

const b = block('row');

interface RowProps {
    name: string;
    children: VNode;
}

export function Row(props: RowProps) {
    return html`<div class="${b()}">
        <div class="${b('category')}">${props.name}</div>
        <div class="${b('body')}">${props.children}</div>
    </div>`;
}