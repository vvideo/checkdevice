import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { i18n } from '../../../../i18n';
import { List } from '../../../../components/ui/List';
import { WarningMessage } from '../../../../components/ui/WarningMessage';

const b = block('device-motion-event');
const hasSupport = typeof DeviceMotionEvent !== 'undefined';

export function DeviceMotionEventComponent() {
    const [ motionEvent, setMotionEvent ] = useState<DeviceMotionEvent | null>(null);

    useEffect(() => {
        function handleDeviceMotion(event: DeviceMotionEvent) {
            setMotionEvent(event);
        }

        window.addEventListener('devicemotion', handleDeviceMotion, true);

        return () => {
            window.removeEventListener('devicemotion', handleDeviceMotion, true);
        };
    }, []);

    if (!hasSupport) {
        return (<WarningMessage>{i18n('DeviceMotionEvent is not supported.')}</WarningMessage>);
    }

    const accelerationItems: [string, number | null | undefined][] = motionEvent?.acceleration ?[
        ['x: ', motionEvent.acceleration?.x],
        ['y: ', motionEvent.acceleration?.y],
        ['z: ', motionEvent.acceleration?.z],
    ] : [];

    const accelerationIncludingGravityItems: [string, number | null | undefined][] = motionEvent?.acceleration ?[
        ['x: ', motionEvent.accelerationIncludingGravity?.x],
        ['y: ', motionEvent.accelerationIncludingGravity?.y],
        ['z: ', motionEvent.accelerationIncludingGravity?.z],
    ] : [];

    const rotationRateItems: [string, number | null | undefined][] = motionEvent?.rotationRate ?[
        ['alpha: ', motionEvent.rotationRate?.alpha],
        ['beta: ', motionEvent.rotationRate?.beta],
        ['gamma: ', motionEvent.rotationRate?.gamma],
    ] : [];

    return (
        <div class={b()}>
            {accelerationItems.length ? (
                <List title={i18n('Acceleration')} items={accelerationItems} />
            ) : null}

            {accelerationIncludingGravityItems.length ? (
                <List title={i18n('Acceleration including gravity')} items={accelerationItems} />
            ) : null}

            {rotationRateItems.length ? (
                <List title={i18n('Rotation rate')} items={rotationRateItems} />
            ) : null}
        </div>
    );
}