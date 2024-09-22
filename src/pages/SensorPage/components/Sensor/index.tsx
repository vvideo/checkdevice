import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { DeviceMotionEventComponent } from '../DeviceMotionEventComponent';
import { isSsr } from '../../../../utils/isSsr';
import { AccelerometerComponent } from '../AccelerometerComponent';
import { AmbientLightSensorComponent } from '../AmbientLightSensorComponent';
import { MagnetometerComponent } from '../MagnetometerComponent';

import './index.css';

const b = block('sensor');

export function Sensor() {
    if (isSsr) {
        return null;
    }

    return (
        <div class={b()}>
            <div class={b('section')}>
                <div class={b('header')}>DeviceMotionEvent</div>
                <DeviceMotionEventComponent />
            </div>
            <div class={b('section')}>
                <div class={b('header')}>Accelerometer</div>
                <AccelerometerComponent />
            </div>
            <div class={b('section')}>
                <div class={b('header')}>AmbientLightSensor</div>
                <AmbientLightSensorComponent />
            </div>
            <div class={b('section')}>
                <div class={b('header')}>Magnetometer</div>
                <MagnetometerComponent />
            </div>
        </div>
    );
}
