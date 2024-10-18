import { h, ComponentChildren, JSX } from 'preact';

import { block } from '../../../utils/css/bem';
import { classname } from '../../../utils/css/classname';

import './index.css';

const b = block('section');

interface SectionProps {
    name?: string | number | JSX.Element;
    class?: string;
    children?: ComponentChildren;
}

export function Section(props: SectionProps) {
    if (!props.children) {
        return null;
    }

    const className = classname(b(), props.class);
    const name = typeof props.name === 'number' ? String(props.name) : props.name;

    return props.name ? (<section class={className}>
        <h2 class={b('name')}>{name}</h2>
        <div class={b('body')}>{props.children}</div>
    </section>) : (<div class={b()}>{props.children}</div>);
}
