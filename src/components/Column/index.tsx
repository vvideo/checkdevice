import { h } from 'preact';
import { block } from '../../utils/css/bem';
import { VNode } from 'preact';

import './index.css';

const b = block('column');

interface ColumnProps {
    name: string;
    title?: string;
    children: VNode | VNode[] | string;
    disabled?: boolean;
}

export function Column(props: ColumnProps) {
    return (<div class={b()}>
        <div title={props.title} class={b('category', { disabled: props.disabled })}>{props.name}</div>
        <div class={b('body')}>{props.children}</div>
    </div>);
}