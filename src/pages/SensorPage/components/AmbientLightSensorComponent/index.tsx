import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';

const b = block('ambient-light-sensor');

export function AmbientLightSensorComponent() {
    const [ illuminance, setIlluminance ] = useState<number | undefined>();

    useEffect(() => {
        const sensor = new AmbientLightSensor();
        const handleReading = () => {
            setIlluminance(sensor.illuminance);
        };

        sensor.addEventListener('reading', handleReading);
        sensor.start()

        return () => {
            sensor.removeEventListener('reading', handleReading);
            sensor.stop();
        };
    }, []);

    return typeof illuminance !== 'undefined' ? (
        <div class={b()}>
            Current light level {illuminance}
        </div>
    ) : null;
}
