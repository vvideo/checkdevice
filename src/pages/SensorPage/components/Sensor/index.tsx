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
            title: i18n('devicemotion event'),
            description: i18n('The devicemotion event is fired at a regular interval and indicates the acceleration rate of the device with/without the contribution of the gravity force at that time. It also provides information about the rate of rotation, if available.'),
            hasSupport: hasSupportDeviceMotionEvent,
            Component: DeviceMotionEventComponent,
        },
        {
            title: i18n('Accelerometer'),
            description: i18n('The Accelerometer interface provides on each reading the acceleration applied to the device along all three axes.'),
            hasSupport: hasSupportAccelerometer,
            Component: AccelerometerComponent,
        },
        {
            title: i18n('Ambient Light Sensor'),
            description: i18n('The AmbientLightSensor interface returns the current light level or illuminance of the ambient light around the hosting device.'),
            hasSupport: hasSupportAmbientLightSensor,
            Component: AmbientLightSensorComponent,
        },
        {
            title: i18n('Magnetometer'),
            description: i18n('The Magnetometer interface provides information about the magnetic field as detected by the device\'s primary magnetometer sensor.'),
            hasSupport: hasSupportMagnetometer,
            Component: MagnetometerComponent,
        },
        {
            title: i18n('Gravity Sensor'),
            description: i18n('The GravitySensor interface provides on each reading the gravity applied to the device along all three axes.'),
            hasSupport: hasSupportGravitySensor,
            Component: GravitySensorComponent,
        },
        {
            title: i18n('Gyroscope'),
            description: i18n('The Gyroscope interface provides on each reading the angular velocity of the device along all three axes.'),
            hasSupport: hasSupportGyroscope,
            Component: GyroscopeComponent,
        },
        {
            title: i18n('Linear Acceleration Sensor'),
            description: i18n('The LinearAccelerationSensor interface provides on each reading the acceleration applied to the device along all three axes, but without the contribution of gravity.'),
            hasSupport: hasSupportLinearAccelerationSensor,
            Component: LinearAccelerationSensorComponent,
        },
        {
            title: i18n('Absolute Orientation Sensor'),
            description: i18n('The AbsoluteOrientationSensor interface describes the device\'s physical orientation in relation to the Earth\'s reference coordinate system.'),
            hasSupport: hasSupportAbsoluteOrientationSensor,
            Component: AbsoluteOrientationSensorComponent
        },
        {
            title: i18n('Relative Orientation Sensor'),
            description: i18n('The RelativeOrientationSensor interface describes the device\'s physical orientation without regard to the Earth\'s reference coordinate system.'),
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
                    const { Component, title, description, hasSupport } = item;
                    return (
                        <div class={b('section', { support: hasSupport})}>
                            <div class={b('header')}>{title}</div>
                            <div class={b('descriptiom')}>{description}</div>
                            <Component />
                        </div>
                    );
                })
            }
        </div>
    );
}
