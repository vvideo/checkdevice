import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { WarningMessage } from '../WarningMessage';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n';
import { BatteryBadge } from '../BatteryBadge';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { Spinner } from '../ui/Spinner';
import { List } from '../List';
import { formatTime } from './utils';
import { isSsr } from '../../utils/isSsr';
import { ValueInProgress } from '../ValueInProgress';

import './index.css';

const b = block('battery-status');

export function BatteryStatus() {
    if (isSsr) {
        return html`<${BatteryStatusSsr} //>`;
    }

    if (!navigator.getBattery) {
        return html`<${WarningMessage}>${i18n('Battery Status API is not supported.')}<//>`;
    }

    const [batteryManager, setBatteryManager] = useState<BatteryManager | undefined>();

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!navigator.getBattery) {
            return;
        }

        navigator.getBattery().then(battery => {
            setBatteryManager(battery);
        }).catch((error: Error) => {
            console.error(error);
        });

        const interval = setInterval(() => {
            forceUpdate();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const items = (batteryManager ? [
        isFinite(batteryManager.chargingTime) ? [i18n('Charging time'), formatTime(batteryManager.chargingTime)] : undefined,
        isFinite(batteryManager.dischargingTime) ? [i18n('Discharging time'), formatTime(batteryManager.dischargingTime)] : undefined,
    ] : []).filter(Boolean);

    return batteryManager ? html`
        <div class="${b()}">
            <${BatteryBadge} level="${batteryManager.level}" charging="${batteryManager.charging}"><//>
            <${List} class="${b('list')}" items="${items}"><//>
        </div>
    ` : html`<${Spinner} //>`;
}

export function BatteryStatusSsr() {
    const items = [
        [i18n('Charging time'), html`<${ValueInProgress} //>`],
        [i18n('Discharging time'), html`<${ValueInProgress} //>`]
    ];

    return html`<div class="${b()}">
        <${BatteryBadge} level="${0}" charging="${false}"><//>
        <${List} class="${b('list')}" items="${items}"><//>
    </div>`;
}