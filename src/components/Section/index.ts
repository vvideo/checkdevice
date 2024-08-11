import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { VNode } from 'preact';

import './index.css';
import { classname } from '../../utils/css/classname';

const b = block('section');

interface SectionProps {
    name: string;
    class?: string;
    children: VNode;
}

export function Section(props: SectionProps) {
    if (!props.children) {
        return '';
    }

    const className = classname(b(), props.class);
    
    return props.name ? html`<section class="${className}">
        <h2 class="${b('name')}">${props.name}</h2>
        <div class="${b('body')}">${props.children}</div>
    </section>` : html`<div class="${b()}">${props.children}</div>`;
}