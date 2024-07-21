import { VNode } from 'preact';
import { block } from '../../utils/bem';
import { html } from 'htm/preact';

import './index.css';
import { classname } from '../../utils/classname';

interface LinkProps {
    class?: string;
    target?: string;
    href: string;
    theme?: 'white';
    children: VNode | string;
}

const b = block('link');

export function Link(props: LinkProps) {
    const className = classname(props.class, b({ theme: props.theme }));

    return html`<a class="${className}" href="${props.href}">${props.children}</a>`;
}
