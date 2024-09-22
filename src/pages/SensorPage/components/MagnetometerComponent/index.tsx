import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { i18n } from '../../../../i18n';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { isSsr } from '../../../../utils/isSsr';

const b = block('magnetometer');
const hasSupport = typeof Magnetometer !== 'undefined';

export function MagnetometerComponent() {
    const forceUpdate = useForceUpdate();
    const [ sensor, setSensor ] = useState<Magnetometer | null>(null);

    useEffect(() => {
        if (!hasSupport) {
            return;
        }

        const sensor = new Magnetometer();
        const handleAny = () => {
            forceUpdate();
        };

        sensor.addEventListener('activate', handleAny);
        sensor.addEventListener('reading', handleAny);
        sensor.addEventListener('error', handleAny);
        sensor.start()

        setSensor(sensor);

        return () => {
            sensor.removeEventListener('activate', handleAny);
            sensor.removeEventListener('reading', handleAny);
            sensor.removeEventListener('error', handleAny);
            sensor.stop();
        };
    }, [setSensor, forceUpdate]);

    if (!isSsr && !hasSupport) {
        return (<WarningMessage>{i18n('Magnetometer is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            <ul>
                <li>Activated: {String(sensor.activated)}</li>
                <li>Has reading: {String(sensor.hasReading)}</li>
                <li>Timestamp: {String(sensor.timestamp)}</li>
                <li>Magnetic field along the X-axis {sensor.x}</li>
                <li>Magnetic field along the Y-axis {sensor.y}</li>
                <li>Magnetic field along the Z-axis {sensor.z}</li>
            </ul>
        </div>
    ) : null;
}
