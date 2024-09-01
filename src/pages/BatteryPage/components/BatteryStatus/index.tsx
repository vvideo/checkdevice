import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { BatteryBadge } from '../BatteryBadge';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { Spinner } from '../../../../components/ui/Spinner';
import { List } from '../../../../components/ui/List';
import { formatTime } from './utils';
import { isSsr } from '../../../../utils/isSsr';
import { ValueInProgress } from '../../../../components/ValueInProgress';

import './index.css';

const b = block('battery-status');

export function BatteryStatus() {
    if (isSsr) {
        return (<BatteryStatusSsr />);
    }

    if (!navigator.getBattery) {
        return (<WarningMessage>{i18n('Battery Status API is not supported.')}</WarningMessage>);
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
    ] : []).filter(Boolean) as [string, string][];

    return batteryManager ? (
        <div class={b()}>
            <BatteryBadge level={batteryManager.level} charging={batteryManager.charging} />
            <List class={b('list')} items={items} />
        </div>
    ) : (<Spinner size="xl" />);
}

export function BatteryStatusSsr() {
    const items: [string, h.JSX.Element][] = [
        [i18n('Charging time'), (<ValueInProgress />)],
        [i18n('Discharging time'), (<ValueInProgress />)]
    ];

    return (<div class={b()}>
        <BatteryBadge level={0} charging={false} />
        <List class={b('list')} items={items} />
    </div>);
}
