import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { VNode } from 'preact';

import './index.css';

const b = block('columns');

interface ColumnsProps {
    children: VNode;
}

export function Columns(props: ColumnsProps) {
    return html`<div class="${b()}">${props.children}</div>`;
}