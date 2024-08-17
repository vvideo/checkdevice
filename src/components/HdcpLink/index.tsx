import { h } from 'preact';
import { Link } from '../ui/Link';
import { block } from '../../utils/css/bem';

interface HdcpLinkProps {
    version: string;
}

const b = block('hdcp-link');

export function HdcpLink(props: HdcpLinkProps) {
    return (
        <span class={b()}><Link href="https://vvideo.github.io/hdcp/index.html" target="_blank">HDCP</Link>: {props.version}</span>
    );
}
