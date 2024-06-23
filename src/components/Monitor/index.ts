import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { VNode } from 'preact';

import './index.css';

interface MonitorProps {
    children: VNode;
}

const b = block('monitor');

export function Monitor(props: MonitorProps) {
    return html`
        <div class="${b()}">
            <div class="${b('content')}">${props.children}</div>
            <div class="${b('rack')}"></div>
            <div class="${b('foot')}"></div>
        </div>
    `;
}