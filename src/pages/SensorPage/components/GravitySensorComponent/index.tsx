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
import { getChecked } from '../../../../utils/string/getChecked';

const b = block('gravity-sensor');
const hasSupport = typeof GravitySensor !== 'undefined';

export function GravitySensorComponent() {
    const [ sensor, setSensor ] = useState<GravitySensor | null>(null);
    const [ error, setError ] = useState<Error | null>(null);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!hasSupport) {
            return;
        }

        const sensor = new GravitySensor({ frequency: DEFAULT_FREQUENCY });
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
        return (<WarningMessage>{i18n('GravitySensor is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            {error ? (<ErrorMessage>{error.message}</ErrorMessage>) : null}
            <ul>
                <li>Gravity along the X-axis: {String(floor(sensor.x))}</li>
                <li>Gravity along the Y-axis: {String(floor(sensor.y))}</li>
                <li>Gravity along the Z-axis: {String(floor(sensor.z))}</li>
                <li>Activated: {getChecked(sensor.activated)}, timestamp: {String(floorTimestamp(sensor.timestamp))}</li>
            </ul>
        </div>
    ) : null;
}
