import { h } from 'preact';
import { block } from '../../../utils/css/bem';
import { VNode } from 'preact';
import { classname } from '../../../utils/css/classname';

import './index.css';

const b = block('section');

interface SectionProps {
    name?: string | number;
    class?: string;
    children: VNode;
}

export function Section(props: SectionProps) {
    if (!props.children) {
        return null;
    }

    const className = classname(b(), props.class);
    
    return props.name ? (<section class={className}>
        <h2 class={b('name')}>{props.name}</h2>
        <div class={b('body')}>{props.children}</div>
    </section>) : (<div class={b()}>{props.children}</div>);
}
