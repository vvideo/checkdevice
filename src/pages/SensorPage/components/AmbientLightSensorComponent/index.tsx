import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { i18n } from '../../../../i18n';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { isSsr } from '../../../../utils/isSsr';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { floor } from '../../utils/floor';

const b = block('ambient-light-sensor');
const hasSupport = typeof AmbientLightSensor !== 'undefined';

export function AmbientLightSensorComponent() {
    const [ error, setError ] = useState<Error | null>(null);
    const [ sensor, setSensor ] = useState<AmbientLightSensor | null>(null);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!hasSupport) {
            return;
        }

        const sensor = new AmbientLightSensor();
        const handleAny = () => {
            forceUpdate();
        };

        const handleError = (e: Event) => {
            const error = (e as SensorErrorEvent).error;
            setError(error);
        }

        sensor.addEventListener('activate', handleAny);
        sensor.addEventListener('reading', handleAny);
        sensor.addEventListener('error', handleError);
        sensor.start()

        setSensor(sensor);

        return () => {
            sensor.removeEventListener('activate', handleAny);
            sensor.removeEventListener('reading', handleAny);
            sensor.removeEventListener('error', handleError);
            sensor.stop();
        };
    }, [setSensor, setError, forceUpdate]);

    if (!isSsr && !hasSupport) {
        return (<WarningMessage>{i18n('AmbientLightSensor is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            {error ? (<ErrorMessage>{error.message}</ErrorMessage>) : null}
            <ul>
                <li>Activated: {String(sensor.activated)}</li>
                <li>Has reading: {String(sensor.hasReading)}</li>
                <li>Timestamp: {String(sensor.timestamp)}</li>
                <li>Current light level: {String(floor(sensor.illuminance))}</li>
            </ul>
        </div>
    ) : null;
}