import { h } from 'preact';

import { block } from '../../utils/css/bem';

import './index.css';

interface HeaderProps {
    children: h.JSX.Element | string;
}

const b = block('page-title');

export function PageTitle(props: HeaderProps) {
    return (
        <h1 class={b()}>
            {props.children}
        </h1>
    );
}
