import { html } from 'htm/preact';
import { VNode } from 'preact';

interface WarningMessageProps {
    children: VNode | string;
}

export function WarningMessage(props: WarningMessageProps) {
    return html`<span>⚠️ ${props.children}</span>`;
}