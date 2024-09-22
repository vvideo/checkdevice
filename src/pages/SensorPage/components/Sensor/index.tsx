import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { DeviceMotionEventComponent, hasSupportDeviceMotionEvent } from '../DeviceMotionEventComponent';
import { AccelerometerComponent, hasSupportAccelerometer } from '../AccelerometerComponent';
import { AmbientLightSensorComponent, hasSupportAmbientLightSensor } from '../AmbientLightSensorComponent';
import { hasSupportMagnetometer, MagnetometerComponent } from '../MagnetometerComponent';
import { GravitySensorComponent, hasSupportGravitySensor } from '../GravitySensorComponent';
import { GyroscopeComponent, hasSupportGyroscope } from '../GyroscopeComponent';
import { hasSupportLinearAccelerationSensor, LinearAccelerationSensorComponent } from '../LinearAccelerometerComponent';
import { hasSupportAbsoluteOrientationSensor, AbsoluteOrientationSensorComponent } from '../AbsoluteOrientationSensorComponent';
import { hasSupportRelativeOrientationSensor, RelativeOrientationSensorComponent } from '../RelativeOrientationSensorComponent';
import { i18n } from '../../../../i18n';

import './index.css';

const b = block('sensor');

export function Sensor() {
    const components = [
        {
            title: i18n('DeviceMotion event'),
            hasSupport: hasSupportDeviceMotionEvent,
            Component: DeviceMotionEventComponent,
        },
        {
            title: i18n('Accelerometer'),
            hasSupport: hasSupportAccelerometer,
            Component: AccelerometerComponent,
        },
        {
            title: i18n('Ambient Light Sensor'),
            hasSupport: hasSupportAmbientLightSensor,
            Component: AmbientLightSensorComponent,
        },
        {
            title: i18n('Magnetometer'),
            hasSupport: hasSupportMagnetometer,
            Component: MagnetometerComponent,
        },
        {
            title: i18n('Gravity Sensor'),
            hasSupport: hasSupportGravitySensor,
            Component: GravitySensorComponent,
        },
        {
            title: i18n('Gyroscope'),
            hasSupport: hasSupportGyroscope,
            Component: GyroscopeComponent,
        },
        {
            title: i18n('Linear Acceleration Sensor'),
            hasSupport: hasSupportLinearAccelerationSensor,
            Component: LinearAccelerationSensorComponent,
        },
        {
            title: i18n('Absolute Orientation Sensor'),
            hasSupport: hasSupportAbsoluteOrientationSensor,
            Component: AbsoluteOrientationSensorComponent
        },
        {
            title: i18n('Relative Orientation Sensor'),
            hasSupport: hasSupportRelativeOrientationSensor,
            Component: RelativeOrientationSensorComponent,
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
