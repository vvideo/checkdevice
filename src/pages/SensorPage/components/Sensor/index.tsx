import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { DeviceMotionEventComponent } from '../DeviceMotionEventComponent';
import { isSsr } from '../../../../utils/isSsr';
import { i18n } from '../../../../i18n';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { AccelerometerComponent } from '../AccelerometerComponent';
import { AmbientLightSensorComponent } from '../AmbientLightSensorComponent';

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
                {
                    typeof DeviceMotionEvent === 'undefined' ?
                        (<WarningMessage>{i18n('DeviceMotionEvent is not supported.')}</WarningMessage>) :
                        (<DeviceMotionEventComponent />)
                }
            </div>
            <div class={b('section')}>
                <div class={b('header')}>Accelerometer</div>
                {
                    typeof Accelerometer === 'undefined' ?
                        (<WarningMessage>{i18n('Accelerometer is not supported.')}</WarningMessage>) :
                        (<AccelerometerComponent />)
                }
            </div>
            <div class={b('section')}>
                <div class={b('header')}>AmbientLightSensor</div>
                {
                    typeof AmbientLightSensor === 'undefined' ?
                        (<WarningMessage>{i18n('AmbientLightSensor is not supported.')}</WarningMessage>) :
                        (<AmbientLightSensorComponent />)
                }
            </div>
        </div>
    );
}
