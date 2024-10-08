import { h } from 'preact';

import { block } from '../../utils/css/bem';

import './index.css';

const b = block('codec');

interface CodecProps {
    name: string | h.JSX.Element;
    border?: string;
    color?: string;
    disabled?: boolean;
    tooltip?: string | h.JSX.Element;
}

export function Codec(props: CodecProps) {
    const color = props.disabled ? 'black' : (props.color || 'black');
    const tooltip = props.tooltip ? (<div class={b('tooltip')}>{props.tooltip}</div>) : '';

    return (
        <div class={b({
            color,
            border: props.border,
            disabled: props.disabled,
        })}>
            {tooltip}
            <div class={b('name')}>{props.name}</div>
        </div>
    );
}