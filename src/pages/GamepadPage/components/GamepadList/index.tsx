import { h } from 'preact';
import { useEffect } from 'preact/hooks';

import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { block } from '../../../../utils/css/bem';
import { TreeList } from '../../../../components/TreeList';
import { i18n } from '../../../../i18n';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { isSsr } from '../../../../utils/isSsr';
import { GamepadWait } from '../GamepadWait';

import './index.css';

const b = block('gamepad-list');

export function GamepadList() {
    if (!isSsr && !navigator.getGamepads) {
        return (<WarningMessage>{i18n('🎮 Gamepad API is not supported.')}</WarningMessage>);
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

    const result = isSsr ? [] : navigator.getGamepads();
    const gamepads = Array.isArray(result) ? result.filter(item => item !== null) : [];

    return gamepads.length ? (
        <div class={b()}>
            {
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

                    return (
                        <div class={b('item')}>
                            <div class={b('title')}>{item.id}</div>
                            <TreeList title={i} data={data} options={options} />
                        </div>
                    );
                })
            }
        </div>
    ) : (<GamepadWait />);
}
