import { html  } from 'htm/preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';
import { block } from '../../utils/bem';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';
import { KeyState } from '../KeyboardKey';
import { KeyboardLayout } from '../KeyboardLayout';
import { winKeyboardLayout } from '../KeyboardLayout/type/win';
import { clearPressedStatus, prepareKeyboardCode } from './utils';
import { keyboardLedController } from '../../lib/KeyboardLedController';

import './index.css';

export const b = block('keyboard');

export type KeysState = Record<string, KeyState>;

export function Keyboard() {
    const refKeysState = useRef<KeysState>({});

    const forceRender = useForceUpdate();

    const handleReset = useCallback(() => {
        refKeysState.current = {};
        forceRender();
    }, []);

    useEffect(() => {
        const handleLed = () => {
            refKeysState.current['CapsLock'] = refKeysState.current['CapsLock'] || {};
            refKeysState.current['CapsLock'].led = keyboardLedController.capsLock;

            forceRender();
        };

        keyboardLedController.addListener(handleLed);

        const handleKeydown = (event: KeyboardEvent) => {
            event.preventDefault();

            const code = prepareKeyboardCode(event.code, event.key);

            refKeysState.current[code] = refKeysState.current[code] || {};

            const data = refKeysState.current[code];

            if (event.code !== 'CapsLock') {
                data.pressed = true;
            }

            data.wasPressed = true;

            forceRender();

            console.log('keydown code', code);
        };

        const handleKeyup = (event: KeyboardEvent) => {
            event.preventDefault();

            const code = prepareKeyboardCode(event.code, event.key);

            refKeysState.current[code] = refKeysState.current[code] || {};

            const data = refKeysState.current[code];
            data.pressed = false;
            data.wasPressed = true;

            if (code === 'MetaLeft' || code === 'MetaRight') {
                clearPressedStatus(refKeysState.current);
            }

            forceRender();

            console.log('keyup code', code);
        };

        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('keyup', handleKeyup);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('keyup', handleKeyup);

            keyboardLedController.removeListener(handleLed);
        };
    }, []);

    return html`
        <div class="${b()}">
            <${KeyboardLayout} layout="${winKeyboardLayout}" keysState="${refKeysState.current}" //>

            <div class="${b('controls')}">
                <${Button} size="m" onClick="${handleReset}">${i18n('Reset')}<//>
            </div>
        </div>
    `;
}
