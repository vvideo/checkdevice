import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';

const b = block('accelerometer');

export function AccelerometerComponent() {
    const [ data, setData ] = useState<{ x?: number, y?: number, z?: number } | null>(null);

    useEffect(() => {
        const sensor = new Accelerometer();
        const handleReading = () => {
            setData({
                x: sensor.x,
                y: sensor.y,
                z: sensor.z,
            });
        };

        sensor.addEventListener('reading', handleReading);
        sensor.start()

        return () => {
            sensor.removeEventListener('reading', handleReading);
            sensor.stop();
        };
    }, []);

    return (
        <div class={b()}>
            {data ? (
            <ul>
                <li>Acceleration along the X-axis {data.x}</li>
                <li>Acceleration along the Y-axis {data.y}</li>
                <li>Acceleration along the Z-axis {data.z}</li>
            </ul>
            ) : null}
        </div>
    );
}
