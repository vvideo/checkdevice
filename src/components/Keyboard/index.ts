import { html  } from 'htm/preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';
import { block } from '../../utils/bem';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';
import { KeyState } from '../KeyboardKey';
import { KeyboardLayout } from '../KeyboardLayout';
import { macKeyboardLayout } from '../KeyboardLayout/type/mac';

import './index.css';

export const b = block('keyboard');

export type KeysState = Record<string, KeyState>;

function preparedKeyboardCode(code: string, key: string) {
    if (code === 'IntlBackslash' && (key === '`' || key === '~')) {
        return 'Backquote';
    } else if (code === 'Backquote' && (key === '§' || key === '±')) {
        return 'IntlBackslash';
    }

    return code;
}

function updateCapslock(event: KeyboardEvent, keysState: KeysState) {
    if (event.getModifierState) {
        keysState['CapsLock'] = keysState['CapsLock'] || {};
        keysState['CapsLock'].led = event.getModifierState('CapsLock');
    }
}

function clearPressedStatus(keysState: KeysState) {
    Object.keys(keysState).forEach(key => {
        keysState[key].pressed = false;
    });
}

export function Keyboard() {
    const refKeysState = useRef<KeysState>({});

    const forceRender = useForceUpdate();

    const handleReset = useCallback(() => {
        refKeysState.current = {};
        forceRender();
    }, []);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            event.preventDefault();

            const code = preparedKeyboardCode(event.code, event.key);

            refKeysState.current[code] = refKeysState.current[code] || {};

            const data = refKeysState.current[code];

            if (event.code !== 'CapsLock') {
                data.pressed = true;
            }

            data.wasPressed = true;

            updateCapslock(event, refKeysState.current);

            forceRender();

            console.log('keydown code', code);
        };

        const handleKeyup = (event: KeyboardEvent) => {
            event.preventDefault();

            const code = preparedKeyboardCode(event.code, event.key);

            refKeysState.current[code] = refKeysState.current[code] || {};

            const data = refKeysState.current[code];
            data.pressed = false;
            data.wasPressed = true;

            if (code === 'MetaLeft' || code === 'MetaRight') {
                clearPressedStatus(refKeysState.current);
            }

            updateCapslock(event, refKeysState.current);

            forceRender();

            console.log('keyup code', code);
        };

        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('keyup', handleKeyup);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('keyup', handleKeyup);
        };
    }, []);

    return html`
        <div class="${b()}">
            <${KeyboardLayout} layout="${macKeyboardLayout}" type="mac" keysState="${refKeysState.current}" //>

            <div class="${b('controls')}">
                <${Button} size="m" onClick="${handleReset}">${i18n('Reset')}<//>
            </div>
        </div>
    `;
}
