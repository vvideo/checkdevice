import { ComponentChildren, h } from 'preact';

import { block } from '../../utils/css/bem';

import './index.css';

const b = block('columns');

interface ColumnsProps {
    children: ComponentChildren;
}

export function Columns(props: ColumnsProps) {
    return (<div class={b()}>{props.children}</div>);
}
