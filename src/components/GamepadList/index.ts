import { html } from 'htm/preact';
import { useEffect } from 'preact/hooks';
import { WarningMessage } from '../WarningMessage';
import { block } from '../../utils/bem';
import { TreeList } from '../TreeList';
import { i18n } from '../../i18n/i18n';
import { useForceUpdate } from '../../hooks/useForceUpdate';

const b = block('gamepad-list');

export function GamepadList() {
    if (!navigator.getGamepads) {
        return html`<${WarningMessage}>${i18n('Gamepad API is not supported.')}<//>`;
    }

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        const handleGamepad = () => {
            forceUpdate();
        };

        window.addEventListener('gamepadconnected', handleGamepad);
        window.addEventListener('gamepaddisconnected', handleGamepad);

        return () => {
            window.removeEventListener('gamepadconnected', handleGamepad);
            window.removeEventListener('gamepaddisconnected', handleGamepad);
        };
    }, []);

    const gamepads = navigator.getGamepads().filter(item => item !== null);

    return gamepads.length ? html`
        <div class="${b()}">
            ${
                gamepads.map((item, i) => {
                    const data = {
                        id: item?.id,
                        connected: item?.connected,
                        index: item?.index,
                        mapping: item?.mapping,
                    };

                    return html`<${TreeList} name="${i}" data="${data}"><//>`;
                })
            }
        </div>
    ` : html`<${WarningMessage}>${i18n('Press any key on the gamepad.')}<//>`;
}