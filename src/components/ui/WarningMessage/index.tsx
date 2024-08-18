import { h } from 'preact';
import { block } from '../../../utils/css/bem';

import './index.css';

interface WarningMessageProps {
    theme?: 'gray'
    children: h.JSX.Element | string;
}

const b = block('warning-message');

export function WarningMessage(props: WarningMessageProps) {
    return (<span class={b({ theme: props.theme })}>⚠️ {props.children}</span>);
}
