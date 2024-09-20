import { h } from 'preact';

import { block } from '../../utils/css/bem';
import { classname } from '../../utils/css/classname';

import './index.css';

const b = block('column');

interface ColumnProps {
    name: string;
    class?: string;
    title?: string;
    children: h.JSX.Element | h.JSX.Element[] | string;
    disabled?: boolean;
}

export function Column(props: ColumnProps) {
    const cls = classname(b(), props.class);
    return (<div class={cls}>
        <div title={props.title} class={b('category', { disabled: props.disabled })}>{props.name}</div>
        <div class={b('body')}>{props.children}</div>
    </div>);
}
