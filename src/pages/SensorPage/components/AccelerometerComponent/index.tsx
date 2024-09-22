import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { isSsr } from '../../../../utils/isSsr';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { i18n } from '../../../../i18n';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { floor, floorTimestamp } from '../../utils/floor';
import { DEFAULT_FREQUENCY } from '../../const';

const b = block('accelerometer');
export const hasSupportAccelerometer = typeof Accelerometer !== 'undefined';

export function AccelerometerComponent() {
    const [ sensor, setSensor ] = useState<Accelerometer>();
    const [ error, setError ] = useState<Error | null>(null);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!hasSupportAccelerometer) {
            return;
        }

        const sensor = new Accelerometer({ frequency: DEFAULT_FREQUENCY });
        const handleAny = () => {
            forceUpdate();
        };

        const handleError = (e: Event) => {
            const error = (e as SensorErrorEvent).error;
            setError(error);
        };

        sensor.addEventListener('activate', handleAny);
        sensor.addEventListener('reading', handleAny);
        sensor.addEventListener('error', handleError);
        sensor.start();

        setSensor(sensor);

        return () => {
            sensor.removeEventListener('activate', handleAny);
            sensor.removeEventListener('reading', handleAny);
            sensor.removeEventListener('error', handleError);
            sensor.stop();
        };
    }, [setSensor, setError, forceUpdate]);

    if (!isSsr && !hasSupportAccelerometer) {
        return(<WarningMessage>{i18n('Accelerometer is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            {error ? (<ErrorMessage>{error.message}</ErrorMessage>) : null}
            <ul>
                <li>Acceleration along the X-axis: {String(floor(sensor.x))}</li>
                <li>Acceleration along the Y-axis: {String(floor(sensor.y))}</li>
                <li>Acceleration along the Z-axis {String(floor(sensor.z))}</li>
                <li>Activated: {String(sensor.activated)}, timestamp: {String(floorTimestamp(sensor.timestamp))}</li>
            </ul>
        </div>
    ) : null;
}
