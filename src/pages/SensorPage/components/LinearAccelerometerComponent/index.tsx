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

const b = block('linear-acceleration-sensor');
export const hasSupportLinearAccelerationSensor = typeof LinearAccelerationSensor !== 'undefined';

interface LinearAccelerationSensorComponentProps {
    onError: (e: SensorErrorEvent) => void;
}

export function LinearAccelerationSensorComponent(props: LinearAccelerationSensorComponentProps) {
    const { onError } = props;
    const [ sensor, setSensor ] = useState<Accelerometer>();
    const [ error, setError ] = useState<Error | null>(null);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!hasSupportLinearAccelerationSensor) {
            return;
        }

        const sensor = new LinearAccelerationSensor({ frequency: DEFAULT_FREQUENCY });
        const handleAny = () => {
            forceUpdate();
        };

        const handleError = (e: SensorErrorEvent) => {
            setError(e.error);
            onError(e);
        };

        sensor.addEventListener('activate', handleAny);
        sensor.addEventListener('reading', handleAny);
        sensor.addEventListener('error', handleError);
        sensor.start();

        setSensor(sensor);

        return () => {
            sensor.removeEventListener('activate', handleAny);
            sensor.removeEventListener('reading', handleAny);
            // @ts-ignore
            sensor.removeEventListener('error', handleError);
            sensor.stop();
        };
    }, [setSensor, setError, forceUpdate]);

    if (!isSsr && !hasSupportLinearAccelerationSensor) {
        return(<WarningMessage>{i18n('LinearAccelerationSensor is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            {error ? (<ErrorMessage>{error.message}</ErrorMessage>) : null}
            <ul>
                <li>{i18n('Linear acceleration along the X-axis')}: {String(floor(sensor.x))}</li>
                <li>{i18n('Linear acceleration along the Y-axis')}: {String(floor(sensor.y))}</li>
                <li>{i18n('Linear acceleration along the Z-axis')}: {String(floor(sensor.z))}</li>
                <li>{i18n('Activated')}: {String(sensor.activated)}</li>
                <li>{i18n('Timestamp')}: {String(floorTimestamp(sensor.timestamp))}</li>
            </ul>
        </div>
    ) : null;
}
