import { html } from 'htm/preact';
import { VNode } from 'preact';
import { classname } from '../../utils/classname';
import { block } from '../../utils/bem';

import './index.css';

interface ButtonProps {
    class?: string;
    children: VNode | string;
    onClick?: () => void;
    theme?: 'active' | 'red';
    size?: 's';
}

const b = block('button');

export function Button(props: ButtonProps) {
    const className = classname(
        props.class,
        b({ theme: props.theme, size: props.size }),
    );

    return html`<button class="${className}" onClick="${props.onClick}">${props.children}</button>`;
}
