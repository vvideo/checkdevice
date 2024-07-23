import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { WarningMessage } from '../WarningMessage';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { BatteryBadge } from '../BatteryBadge';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { Spinner } from '../Spinner';
import { List } from '../List';
import { formatTime } from './utils';

import './index.css';
import { isSsr } from '../../utils/isSsr';

const b = block('battery-status');

export function BatteryStatus() {
    if (isSsr || !navigator.getBattery) {
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

    const items = batteryManager ? [
        [i18n('Charging time'), isFinite(batteryManager?.chargingTime) ? formatTime(batteryManager?.chargingTime) : '∞'],
        [i18n('Discharging time'), isFinite(batteryManager?.dischargingTime) ? formatTime(batteryManager?.dischargingTime) : '∞']
    ] : [];

    return batteryManager ? html`
        <div class="${b()}">
            <${BatteryBadge} level="${batteryManager.level}" charging="${batteryManager.charging}"><//>
            <${List} class="${b('list')}" items="${items}"><//>
        </div>
    ` : html`<${Spinner} //>`;
}