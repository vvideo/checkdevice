import { html } from 'htm/preact';
import { useState, useRef } from 'preact/hooks';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';

export function Battery() {
    const [_, setReady] = useState(false);

    const ref = useRef<[string, any][]>([]);
    
    navigator.getBattery && navigator.getBattery().then(data => {
        ref.current = [
            ['charging', String(data.charging)],
            ['chargingTime', String(data.chargingTime)],
            ['dischargingTime', String(data.dischargingTime)],
            ['level', String(data.level)],
        ];

        setReady(true);
    }).catch();
    
    return html`<${List} title="${i18n('Battery')}" items="${ref.current}"><//>`;
}
