import { html } from 'htm/preact';
import { Link } from '../Link';

interface HdcpLinkProps {
    version: string;
}

export function HdcpLink(props: HdcpLinkProps) {
    return html`<${Link} href="https://vvideo.github.io/hdcp/index.html" target="_blank">HDCP<//>: ${props.version}`;
}
