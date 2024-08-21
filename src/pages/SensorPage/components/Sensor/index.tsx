import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';

const b = block('sensor');

export function Sensor() {
    const [ acceleration, setAcceleration ] = useState<DeviceMotionEventAcceleration | null>(null);

    useEffect(() => {
        function handleDeviceMotion(event: DeviceMotionEvent) {
            if (!event.acceleration) {
                return;
            }

            setAcceleration({
                x: event.acceleration.x,
                y: event.acceleration.y,
                z: event.acceleration.z,
            });
        }

        window.addEventListener('devicemotion', handleDeviceMotion, true);

        return () => {
            window.removeEventListener('devicemotion', handleDeviceMotion, true);
        };
    }, []);

    return (
        <div class={b()}>
            {acceleration ? (
                <div class={b('acceleration')}>
                    <div>{acceleration.x}</div>
                    <div>{acceleration.y}</div>
                    <div>{acceleration.z}</div>
                </div>
            ) : null}
        </div>
    );
}
