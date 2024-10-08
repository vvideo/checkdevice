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

interface AmbientLightSensorComponentProps {
    onError: (e: SensorErrorEvent) => void;
}

export function AmbientLightSensorComponent(props: AmbientLightSensorComponentProps) {
    const {onError } = props;
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

        const handleError = (e: SensorErrorEvent) => {
            setError(e.error);
            onError(e);
        }

        sensor.addEventListener('activate', handleAny);
        sensor.addEventListener('reading', handleAny);
        sensor.addEventListener('error', handleError);
        sensor.start()

        setSensor(sensor);

        return () => {
            sensor.removeEventListener('activate', handleAny);
            sensor.removeEventListener('reading', handleAny);
            // @ts-ignore
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
                <li>{i18n('Current light level')}: {String(floor(sensor.illuminance))}</li>
                <li>{i18n('Activated')}: {String(sensor.activated)}</li>
                <li>{i18n('Timestamp')}: {String(floorTimestamp(sensor.timestamp))}</li>
            </ul>
        </div>
    ) : null;
}
