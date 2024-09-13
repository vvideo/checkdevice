import { h } from 'preact';
import { block } from '../../../utils/css/bem';

import './index.css';
import { classname } from '../../../utils/css/classname';

interface WarningMessageProps {
    theme?: 'gray';
    class?: string;
    children: h.JSX.Element | string;
}

const b = block('warning-message');

export function WarningMessage(props: WarningMessageProps) {
    const cls = classname(b({ theme: props.theme }), props.class);
    return (<span class={cls}>⚠️ {props.children}</span>);
}
