import { h } from 'preact';

import { block } from '../../utils/css/bem';

import './index.css';

const b = block('columns');

interface ColumnsProps {
    children: h.JSX.Element | h.JSX.Element[];
}

export function Columns(props: ColumnsProps) {
    return (<div class={b()}>{props.children}</div>);
}
