import { h } from 'preact';

import { block } from '../../../../utils/css/bem';

import './index.css';

interface MonitorProps {
    children: h.JSX.Element;
}

const b = block('monitor');

export function Monitor(props: MonitorProps) {
    return (
        <div class={b()}>
            <div class={b('content')}>{props.children}</div>
            <div class={b('rack')}></div>
            <div class={b('foot')}></div>
        </div>
    );
}