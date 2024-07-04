import { html } from 'htm/preact';
import { useEffect } from 'preact/hooks';
import { block } from '../../utils/bem';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { keyboardStateController } from '../../lib/KeyboardStateController';

interface KeyboardLedProps {
    code: string;
    on: boolean;
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
    }, []);

    const state = keyboardStateController.getKeyState(props.code);

    return html`<div class="${b({ on: state.led, code: props.code })}"></div>`;
}
