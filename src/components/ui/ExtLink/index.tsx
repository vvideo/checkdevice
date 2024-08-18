import { h } from 'preact';

import { Link } from '../Link';

interface ExtLinkProps {
    href: string;
    target?: string;
    children: h.JSX.Element | string;
    theme?: 'white';
}

export function ExtLink(props: ExtLinkProps) {
    return (
        <Link theme={props.theme} href={props.href} target={props.target || '_blank'}>{props.children}</Link>
    );
}