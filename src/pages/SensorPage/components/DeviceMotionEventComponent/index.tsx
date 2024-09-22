import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useEffect, useState } from 'preact/hooks';
import { i18n } from '../../../../i18n';
import { List } from '../../../../components/ui/List';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { floor } from '../../utils/floor';

const b = block('device-motion-event');
export const hasSupportDeviceMotionEvent = typeof DeviceMotionEvent !== 'undefined';

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

    if (!hasSupportDeviceMotionEvent) {
        return (<WarningMessage>{i18n('DeviceMotionEvent is not supported.')}</WarningMessage>);
    }

    const accelerationItems: [string, number | null | undefined][] = motionEvent?.acceleration ?[
        ['x', floor(motionEvent.acceleration?.x)],
        ['y', floor(motionEvent.acceleration?.y)],
        ['z', floor(motionEvent.acceleration?.z)],
    ] : [];

    const accelerationIncludingGravityItems: [string, number | null | undefined][] = motionEvent?.acceleration ?[
        ['x', floor(motionEvent.accelerationIncludingGravity?.x)],
        ['y', floor(motionEvent.accelerationIncludingGravity?.y)],
        ['z', floor(motionEvent.accelerationIncludingGravity?.z)],
    ] : [];

    const rotationRateItems: [string, number | null | undefined][] = motionEvent?.rotationRate ?[
        [i18n('alpha'), floor(motionEvent.rotationRate?.alpha)],
        [i18n('beta'), floor(motionEvent.rotationRate?.beta)],
        [i18n('gamma'), floor(motionEvent.rotationRate?.gamma)],
    ] : [];

    return (
        <div class={b()}>
            {
                !accelerationItems.length && !accelerationIncludingGravityItems.length && !rotationRateItems.length ? (
                    i18n('Waiting for the event…')
                ) : null
            }
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
