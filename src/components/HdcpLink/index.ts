import { html } from 'htm/preact';

interface HdcpLinkProps {
    version: string;
}

export function HdcpLink(props: HdcpLinkProps) {
    return html`<a href="https://vvideo.github.io/hdcp/index.html" target="_blank">HDCP</a>: ${props.version}`;
}
