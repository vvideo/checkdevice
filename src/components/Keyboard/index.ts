import { html  } from 'htm/preact';
import { MutableRef, useCallback, useEffect, useRef } from 'preact/hooks';
import { block } from '../../utils/bem';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';
import { Key, KeyboardLayout, RowOfKeys } from './layouts';
import { macKeyboardLayout } from './layouts/mac';

import './index.css';

const b = block('keyboard');

type RefKeys = Record<string, { name: string; pressed: boolean; wasPressed: boolean; }>;

function getKey(keys: RefKeys, keyData: Key) {
    const data = keys[keyData.code] || {};

    return html`<div class="${b('key', { code: keyData.code, pressed: data.pressed, wasPressed: data.wasPressed })}" key="${keyData.code}">${keyData.name}</div>`;
}

function getRowWithKeys(keys: RowOfKeys, refKeys: MutableRef<RefKeys>) {
    return keys.map(item => {
        return getKey(refKeys.current, item);
    });
}

function getLayout(layout: KeyboardLayout, refKeys: MutableRef<RefKeys>) {
    return layout.map((item, num) => {
        return html`
            <div key="${num}" class="${b('row', { num } )}">
                ${getRowWithKeys(item, refKeys)}
            </div>
        `;
    });
}

export function Keyboard() {
    const refKeys = useRef<RefKeys>({});

    const forceRender = useForceUpdate();

    const layoutContent = getLayout(macKeyboardLayout, refKeys);

    const handleReset = useCallback(() => {
        refKeys.current = {};
        forceRender();
    }, []);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            event.preventDefault();

            const { code } = event;

            refKeys.current[code] = refKeys.current[code] || {};

            const data = refKeys.current[code];

            if (event.code !== 'CapsLock') {
                data.pressed = true;
            }

            data.wasPressed = true;

            forceRender();

            console.log('keydown code', code);
        };

        const handleKeyup = (event: KeyboardEvent) => {
            event.preventDefault();

            const { code } = event;

            refKeys.current[code] = refKeys.current[code] || {};

            const data = refKeys.current[code];
            data.pressed = false;
            data.wasPressed = true;

            refKeys.current[code]

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
            <div class="${b('layout', { type: 'mac' })}">
                ${layoutContent}
            </div>

            <div class="${b('controls')}">
                <${Button} size="m" onClick="${handleReset}">${i18n('Reset')}<//>
            </div>
        </div>
    `;
}
