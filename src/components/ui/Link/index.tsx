import { h } from 'preact';

import { block } from '../../../utils/css/bem';
import { classname } from '../../../utils/css/classname';

import './index.css';

export interface LinkProps {
    class?: string;
    target?: string;
    href: string;
    theme?: 'white' | 'page-theme';
    children: h.JSX.Element | string;
}

const b = block('link');

export function Link(props: LinkProps) {
    const className = classname(props.class, b({ theme: props.theme }));

    return (<a target={props.target} class={className} href={props.href}>{props.children}</a>);
}
