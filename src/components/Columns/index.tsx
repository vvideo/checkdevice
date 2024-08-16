import { h } from 'preact';
import { block } from '../../utils/css/bem';
import { VNode } from 'preact';

import './index.css';

const b = block('columns');

interface ColumnsProps {
    children: VNode;
}

export function Columns(props: ColumnsProps) {
    return (<div class={b()}>{props.children}</div>);
}
