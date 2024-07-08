import { html } from 'htm/preact';
import { useEffect } from 'preact/hooks';
import { WarningMessage } from '../WarningMessage';
import { block } from '../../utils/bem';
import { TreeList } from '../TreeList';
import { i18n } from '../../i18n/i18n';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { Spinner } from '../Spinner';
import { XboxButtons } from '../XboxButtons';

import './index.css';

const b = block('gamepad-list');

export function GamepadList() {
    if (!navigator.getGamepads) {
        return html`<${WarningMessage}>${i18n('🎮 Gamepad API is not supported.')}<//>`;
    }

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        const timer = window.setInterval(() => {
            forceUpdate();
        }, 20);

        const handleGamepad = () => {
            forceUpdate();
        };

        window.addEventListener('gamepadconnected', handleGamepad);
        window.addEventListener('gamepaddisconnected', handleGamepad);

        return () => {
            window.removeEventListener('gamepadconnected', handleGamepad);
            window.removeEventListener('gamepaddisconnected', handleGamepad);
            window.clearInterval(timer);
        };
    }, []);

    const result = navigator.getGamepads();
    const gamepads = Array.isArray(result) ? result.filter(item => item !== null) : [];

    return gamepads.length ? html`
        <div class="${b()}">
            ${
                gamepads.map((rawItem, i) => {
                    const item = rawItem!;
                    const data = {
                        index: item.index,
                        mapping: item.mapping,
                        connected: item.connected,
                        timestamp: item.timestamp,
                        axes: item.axes,
                        buttons: item.buttons.map(button => {
                            return {
                                value: button.value,
                                pressed: button.pressed,
                                touched: button.touched,
                            };
                        }),
                    };

                    if (typeof item.hand !== 'undefined') {
                        // @ts-ignore
                        data.hand = item.hand;
                    }

                    const options = {
                        compactObject: true,
                        compactArrayWithSimpleTypes: true,
                        showArrayIndex: true,
                    };

                    return html`
                        <div class="${b('item')}">
                            <div class="${b('title')}">${item.id}</div>
                            <${TreeList} name="${i}" data="${data}" options="${options}"><//>
                        </div>`;
                })
            }
        </div>
    ` : html`<${GamepadWait} //>`;
}

function GamepadWait() {
    return html`<${Spinner} size="m" //> ${i18n('Connect and press any button on the gamepad.')} <${XboxButtons} //>`;
}