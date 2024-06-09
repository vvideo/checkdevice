import { html } from 'htm/preact';
import { VNode } from 'preact';
import { block } from '../../utils/bem';

import './index.css';

interface ExtLinkProps {
    href: string;
    children: VNode | string;
    theme: 'string';
}

const b = block('ext-link');

export function ExtLink(props: ExtLinkProps) {
    return html`
        <a class="${b({ theme: props.theme })}" href="${props.href}" target="_blank">${props.children}</a>
    `
}