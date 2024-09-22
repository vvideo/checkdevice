import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { isSsr } from '../../../../utils/isSsr';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { i18n } from '../../../../i18n';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';

const b = block('accelerometer');
const hasSupport = typeof Accelerometer !== 'undefined';

export function AccelerometerComponent() {
    const [ sensor, setSensor ] = useState<Accelerometer>();
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!hasSupport) {
            return;
        }

        const sensor = new Accelerometer();
        const handleAny = () => {
            forceUpdate();
        };

        sensor.addEventListener('activate', handleAny);
        sensor.addEventListener('reading', handleAny);
        sensor.addEventListener('error', handleAny);
        sensor.start();

        setSensor(sensor);

        return () => {
            sensor.removeEventListener('activate', handleAny);
            sensor.removeEventListener('reading', handleAny);
            sensor.removeEventListener('error', handleAny);
            sensor.stop();
        };
    }, [setSensor, forceUpdate]);

    if (!isSsr && !hasSupport) {
        return(<WarningMessage>{i18n('Accelerometer is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            <ul>
                <li>Activated: {String(sensor.activated)}</li>
                <li>Has reading: {String(sensor.hasReading)}</li>
                <li>Timestamp: {String(sensor.timestamp)}</li>
                <li>Acceleration along the X-axis {sensor.x}</li>
                <li>Acceleration along the Y-axis {sensor.y}</li>
                <li>Acceleration along the Z-axis {sensor.z}</li>
            </ul>
        </div>
    ) : null;
}
