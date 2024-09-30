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

const b = block('gyroscope');
export const hasSupportGyroscope = typeof Gyroscope !== 'undefined';

interface GyroscopeComponentProps {
    onError: (e: SensorErrorEvent) => void;
}

export function GyroscopeComponent(props: GyroscopeComponentProps) {
    const { onError } = props;
    const [ sensor, setSensor ] = useState<Gyroscope>();
    const [ error, setError ] = useState<Error | null>(null);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (!hasSupportGyroscope) {
            return;
        }

        const sensor = new Gyroscope({ frequency: DEFAULT_FREQUENCY });
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

    if (!isSsr && !hasSupportGyroscope) {
        return(<WarningMessage>{i18n('Gyroscope is not supported.')}</WarningMessage>);
    }

    return sensor ? (
        <div class={b()}>
            {error ? (<ErrorMessage>{error.message}</ErrorMessage>) : null}
            <ul>
                <li>{i18n('Angular velocity along the X-axis')}: {String(floor(sensor.x))}</li>
                <li>{i18n('Angular velocity along the Y-axis')}: {String(floor(sensor.y))}</li>
                <li>{i18n('Angular velocity along the Z-axis')}: {String(floor(sensor.z))}</li>
                <li>{i18n('Activated')}: {String(sensor.activated)}</li>
                <li>{i18n('Timestamp')}: {String(floorTimestamp(sensor.timestamp))}</li>
            </ul>
        </div>
    ) : null;
}
