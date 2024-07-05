import { VNode } from 'preact';
import { block } from '../../utils/bem';
import { html } from 'htm/preact';

import './index.css';

interface LinkProps {
    target?: string;
    href: string;
    children: VNode | string;
}

const b = block('link');

export function Link(props: LinkProps) {
    return html`<a class="${b('link')}" href="${props.href}">${props.children}</a>`;
}
