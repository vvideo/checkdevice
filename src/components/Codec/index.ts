import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';
import { VNode } from 'preact';

const b = block('codec');

interface CodecProps {
    name: string;
    tooltip?: string | VNode;
    color?: string;
    disabled?: boolean;
}

export function Codec(props: CodecProps) {
    const color = props.disabled ? 'black' : (props.color || 'black');
    const tooltip = props.tooltip ? html`<div class="${b('tooltip')}">${props.tooltip}</div>` : '';

    return html`
        <div class="${b({
            color,
            disabled: props.disabled,
        })}">
            ${tooltip}
            <div class="${b('name')}">${props.name}</div>
        </div>
    `;
}