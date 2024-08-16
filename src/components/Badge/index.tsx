import { h } from 'preact';
import { block } from '../../utils/css/bem';
import { VNode } from 'preact';

import './index.css';

const b = block('badge');

interface BadgeProps {
    text: string | VNode;
    type?: '4k' | 'hdr';
    background?: 'white' | 'gold' | 'transparent';
    size?: 'small';
    disabled?: boolean;
    hidden?: boolean;
    click?: boolean;
    top?: {
        text: string | VNode;
        title?: string;
    };
    bottom?: {
        text: string | VNode | VNode[];
        title?: string;
    };
}

export function Badge(props: BadgeProps) {
    return (<div class={b({
        type: props.type,
        background: props.background,
        disabled: props.disabled,
        hidden: props.hidden,
        size: props.size,
        click: props.click,
    })}>
        ${props.top?.text ? (<div class={b('top-text')} title={props.top.title}>{props.top.text}</div>) : ''}
        <div class={b('body')}>{props.text}</div>
        ${props.bottom?.text ? (<div class={b('bottom-text')} title={props.bottom.title}>{props.bottom.text}</div>) : ''}
    </div>);
}
