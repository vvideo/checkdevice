import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { i18n } from '../../../../i18n';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { isSsr } from '../../../../utils/isSsr';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { floor, floorTimestamp } from '../../utils/floor';
import { DEFAULT_FREQUENCY } from '../../const';

const b = block('ambient-light-sensor');
export const hasSupportAmbientLightSensor = typeof AmbientLightSensor !== 'undefined';

export function AmbientLightSensorComponent() {
    const [ error, setError ] = useState<Error | null>(null);
    const [ sensor, setSensor ] = useState<AmbientLightSensor | null>(null);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!hasSupportAmbientLightSensor) {
            return;
        }

        const sensor = new AmbientLightSensor({ frequency: DEFAULT_FREQUENCY });
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

    if (!isSsr && !hasSupportAmbientLightSensor) {
        return (<WarningMessage>{i18n('AmbientLightSensor is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            {error ? (<ErrorMessage>{error.message}</ErrorMessage>) : null}
            <ul>
                <li>Current light level: {String(floor(sensor.illuminance))}</li>
                <li>Activated: {String(sensor.activated)}, timestamp: {String(floorTimestamp(sensor.timestamp))}</li>
            </ul>
        </div>
    ) : null;
}
