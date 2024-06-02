import { html } from 'htm/preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { WarningMessage } from '../WarningMessage';
import { block } from '../../utils/bem';
import { TreeList } from '../TreeList';
import { i18n } from '../../i18n/i18n';
import { BatteryBadge } from '../BatteryBadge';
import { useForceUpdate } from '../../hooks/useForceUpdate';

import './index.css';

const b = block('battery-status');

export function BatteryStatus() {
    const [hasBattery, setBattery] = useState(false);
    const refBattery = useRef<BatteryManager | undefined>();

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!navigator.getBattery) {
            return;
        }

        navigator.getBattery().then(battery => {
            refBattery.current = battery;
            setBattery(true);
        }).catch((error: Error) => {
            console.error(error);
        });

        const interval = setInterval(() => {
            forceUpdate();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!navigator.getBattery) {
        return html`<${WarningMessage}>${i18n('Battery Status API is not supported.')}<//>`;
    }

    const data = {
        charging: refBattery.current?.charging,
        chargingTime: refBattery.current?.chargingTime,
        dischargingTime: refBattery.current?.dischargingTime,
        level: refBattery.current?.level,
    };

    return hasBattery ? html`
        <div class="${b()}">
            <${TreeList} data="${data}"><//>
            <${BatteryBadge} level="${data.level}" charging="${data.charging}"><//>
        </div>
    ` : '...';
}