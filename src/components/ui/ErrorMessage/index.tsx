import { h } from 'preact';
import { VNode } from 'preact';
import { block } from '../../../utils/css/bem';
import { classname } from '../../../utils/css/classname';

import './index.css';

interface WarningMessageProps {
    theme?: 'gray';
    class?: string;
    children: VNode | string;
}

const b = block('error-message');

export function ErrorMessage(props: WarningMessageProps) {
    const className = classname(props.class, b({ theme: props.theme }));

    return (<div class={className}>❌ ${props.children}</div>);
}
