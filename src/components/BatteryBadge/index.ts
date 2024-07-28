import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';

import './index.css';

const b = block('battery-badge');

interface BatteryBadgeProps {
    level: number;
    charging: boolean;
}

export function BatteryBadge(props: BatteryBadgeProps) {
    return html`
        <div class="${b({ low: props.level < 0.2 })}">
            <div class="${b('charge')}" style="width: ${props.level * 100}%"></div>
            <div class="${b('contact')}"></div>
            ${props.charging ? html`<div class="${b('charging')}">↯</div>` : ''}
            <div class="${b('level')}">${Math.floor(props.level * 100)}%</div>
        </div>
    `;
}