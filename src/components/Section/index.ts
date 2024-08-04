import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { VNode } from 'preact';

import './index.css';

const b = block('section');

interface SectionProps {
    name: string;
    children: VNode;
}

export function Section(props: SectionProps) {
    return props.name ? html`<section class="${b()}">
        <h2 class="${b('name')}">${props.name}</h2>
        <div class="${b('body')}">${props.children}</div>
    </section>` : html`<div class="${b()}">${props.children}</div>`;
}