import { html } from 'htm/preact';
import { VNode } from 'preact';
import { Link } from '../Link';

interface ExtLinkProps {
    href: string;
    children: VNode | string;
    theme: string;
}

export function ExtLink(props: ExtLinkProps) {
    return html`
        <${Link} theme="${props.theme}" href="${props.href}" target="_blank">${props.children}<//>
    `
}