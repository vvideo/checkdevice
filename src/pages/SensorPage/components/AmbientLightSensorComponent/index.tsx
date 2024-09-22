import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { i18n } from '../../../../i18n';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';

const b = block('ambient-light-sensor');

export function AmbientLightSensorComponent() {
    const forceUpdate = useForceUpdate();
    const [ sensor, setSensor ] = useState<AmbientLightSensor | null>(null);

    const hasSupport = typeof AmbientLightSensor !== 'undefined';

    useEffect(() => {
        if (!hasSupport) {
            return;
        }

        const sensor = new AmbientLightSensor();
        const handleAny = () => {
            forceUpdate();
        };

        sensor.addEventListener('reading', handleAny);
        sensor.addEventListener('activate', handleAny);
        sensor.addEventListener('error', handleAny);
        sensor.start()

        setSensor(sensor);

        return () => {
            sensor.removeEventListener('reading', handleAny);
            sensor.removeEventListener('activate', handleAny);
            sensor.removeEventListener('error', handleAny);
            sensor.stop();
        };
    }, []);

    if (!hasSupport) {
        return (<WarningMessage>{i18n('AmbientLightSensor is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            <ul>
                <li>Activated: {String(sensor.activated)}</li>
                <li>Has reading: {String(sensor.hasReading)}</li>
                <li>Timestamp: {String(sensor.timestamp)}</li>
                <li>Current light level: {String(sensor.illuminance)}</li>
            </ul>
        </div>
    ) : null;
}
