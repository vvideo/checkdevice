import { h } from 'preact';

import { block } from '../../../utils/css/bem';
import { classname } from '../../../utils/css/classname';

import './index.css';

const b = block('icon');

interface IconProps {
    type: string;
    size?: 's';
    class?: string;
}

export function Icon(props: IconProps) {
    const cl = classname(b({
        type: props.type,
        size: props.size,
    }), props.class)

    return (<span class={cl}></span>);
}
