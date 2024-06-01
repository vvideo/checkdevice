import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

interface InfoLinkProps {
    title?: string;
    href: string;
}

const b = block('info-link');

export function InfoLink(props: InfoLinkProps) {
    return html`<span class="${b()}">
        <a class="${b('link')}" href="${props.href}" title="${props.title}" target="_blank">ⓘ</a>
    </span>`;
}
