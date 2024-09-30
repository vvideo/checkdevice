import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { isSsr } from '../../../../utils/isSsr';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { i18n } from '../../../../i18n';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { floorTimestamp } from '../../utils/floor';
import { DEFAULT_FREQUENCY } from '../../const';

const b = block('absolute-orientation-sensor');
export const hasSupportAbsoluteOrientationSensor = typeof AbsoluteOrientationSensor !== 'undefined';

interface AbsoluteOrientationSensorComponentProps {
    onError: (error: SensorErrorEvent) => void;
}

export function AbsoluteOrientationSensorComponent(props: AbsoluteOrientationSensorComponentProps) {
    const { onError } = props;
    const [ sensor, setSensor ] = useState<AbsoluteOrientationSensor>();
    const [ error, setError ] = useState<Error | null>(null);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!hasSupportAbsoluteOrientationSensor) {
            return;
        }

        const sensor = new AbsoluteOrientationSensor({ frequency: DEFAULT_FREQUENCY });
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
    }, [setSensor, onError, setError, forceUpdate]);

    if (!isSsr && !hasSupportAbsoluteOrientationSensor) {
        return(<WarningMessage>{i18n('AbsoluteOrientationSensor is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            {error ? (<ErrorMessage>{error.message}</ErrorMessage>) : null}
            <ul>
                <li>{i18n('Quaternion')}: {sensor.quaternion ? '[' + sensor.quaternion.join(', ') + ']' : String(sensor.quaternion)}</li>
                <li>{i18n('Activated')}: {String(sensor.activated)}</li>
                <li>{i18n('Timestamp')}: {String(floorTimestamp(sensor.timestamp))}</li>
            </ul>
        </div>
    ) : null;
}
