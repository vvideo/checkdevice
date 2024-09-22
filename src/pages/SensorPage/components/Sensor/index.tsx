import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { DeviceMotionEvent } from '../DeviceMotionEvent';
import { isSsr } from '../../../../utils/isSsr';
import { i18n } from '../../../../i18n';
import { WarningMessage } from '../../../../components/ui/WarningMessage';

const b = block('sensor');

export function Sensor() {
    if (isSsr) {
        return null;
    }

    if (typeof window.DeviceMotionEvent === 'undefined') {
        return <WarningMessage>{i18n('DeviceMotionEvent is not supported.')}</WarningMessage>
    }

    return (
        <div class={b()}>
            <DeviceMotionEvent />
        </div>
    );
}
