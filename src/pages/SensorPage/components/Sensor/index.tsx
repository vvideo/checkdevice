import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { DeviceMotionEventComponent, hasSupportDeviceMotionEvent } from '../DeviceMotionEventComponent';
import { AccelerometerComponent, hasSupportAccelerometer } from '../AccelerometerComponent';
import { AmbientLightSensorComponent, hasSupportAmbientLightSensor } from '../AmbientLightSensorComponent';
import { hasSupportMagnetometer, MagnetometerComponent } from '../MagnetometerComponent';
import { GravitySensorComponent, hasSupportGravitySensor } from '../GravitySensorComponent';

import './index.css';

const b = block('sensor');

const components = [
    {
        title: 'DeviceMotionEvent',
        hasSupport: hasSupportDeviceMotionEvent,
        Component: DeviceMotionEventComponent,
    },
    {
        title: 'Accelerometer',
        hasSupport: hasSupportAccelerometer,
        Component: AccelerometerComponent,
    },
    {
        title: 'AmbientLightSensor',
        hasSupport: hasSupportAmbientLightSensor,
        Component: AmbientLightSensorComponent,
    },
    {
        title: 'Magnetometer',
        hasSupport: hasSupportMagnetometer,
        Component: MagnetometerComponent,
    },
    {
        title: 'GravitySensor',
        hasSupport: hasSupportGravitySensor,
        Component: GravitySensorComponent,
    }
].sort((a, b) => {
    if (a.hasSupport && !b.hasSupport) {
        return -1;
    }

    if (!a.hasSupport && b.hasSupport) {
        return 1;
    }

    return a.title > b.title ? 1 : -1;
});

export function Sensor() {
    return (
        <div class={b()}>
            {
                components.map(item => {
                    const { Component, title, hasSupport } = item;
                    return (
                        <div class={b('section', { support: hasSupport})}>
                            <div class={b('header')}>{title}</div>
                            <Component />
                        </div>
                    );
                })
            }
        </div>
    );
}
