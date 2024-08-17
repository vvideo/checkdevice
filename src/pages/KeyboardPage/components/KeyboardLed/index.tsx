import { h } from 'preact';
import { useEffect } from 'preact/hooks';

import { block } from '../../../../utils/css/bem';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { keyboardStateController } from '../../../../lib/KeyboardStateController';

interface KeyboardLedProps {
    code: string;
}

const b = block('keyboard-led');

export function KeyboardLed(props: KeyboardLedProps) {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        const handler = (code: string) => {
            if (props.code === code) {
                forceUpdate();
            }
        };

        keyboardStateController.addListener(handler);

        return () => {
            keyboardStateController.removeListener(handler);
        };
    }, [props.code]);

    const state = keyboardStateController.getKeyState(props.code);
    return (<div title={props.code} class={b({ on: state.led, code: props.code })}></div>);
}
