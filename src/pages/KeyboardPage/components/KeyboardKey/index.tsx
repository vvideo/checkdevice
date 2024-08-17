import { h } from 'preact';

import { useEffect } from 'preact/hooks';
import { block } from '../../../../utils/css/bem';
import { keyboardStateController } from '../../../../lib/KeyboardStateController';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';

export interface KeyData {
    type?: 'key';
    code: string;
    view?: 'square' | 'circle';
    topSymbol?: string;
    topLeftSymbol?: string;
    topRightSymbol?: string;
    bottomSymbol?: string;
    bottomText?: string;
    bottomLeftSymbol?: string;
    bottomRightSymbol?: string;
    text?: string;
    fontSize?: 'small';
    align?: 'left' | 'right' | 'center';
    led?: boolean;
}

export interface LedData {
    type: 'led';
    code: string;
}

export interface SpacerData {
    type: 'spacer';
    name: string;
}

interface KeyboardKeyProps {
    keyData: KeyData;
}

const b = block('keyboard-key');

export function KeyboardKey(props: KeyboardKeyProps) {
    const { keyData } = props;

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        const handler = (code: string) => {
            if (keyData.code === code) {
                forceUpdate();
            }
        };

        keyboardStateController.addListener(handler);

        return () => {
            keyboardStateController.removeListener(handler);
        };
    }, [keyData.code]);

    const state = keyboardStateController.getKeyState(keyData.code);

    const title = keyData.code;

    return (
        <div title={title} class={b({ align: keyData.align, code: keyData.code, pressed: state.pressed, wasPressed: state.wasPressed, view: keyData.view, fontSize: keyData.fontSize })}>
            {keyData.text || ''}
            {keyData.topSymbol ? (<div class={b('top-symbol')}>{keyData.topSymbol}</div>) : ''}
            {keyData.topLeftSymbol ? (<div class={b('top-left-symbol')}>{keyData.topLeftSymbol}</div>) : ''}
            {keyData.topRightSymbol ? (<div class={b('top-right-symbol')}>{keyData.topRightSymbol}</div>) : ''}
            {keyData.bottomLeftSymbol ? (<div class={b('bottom-left-symbol')}>{keyData.bottomLeftSymbol}</div>) : ''}
            {keyData.bottomRightSymbol ? (<div class={b('bottom-right-symbol')}>{keyData.bottomRightSymbol}</div>) : ''}
            {keyData.bottomSymbol ? (<div class={b('bottom-symbol')}>{keyData.bottomSymbol}</div>) : ''}
            {keyData.bottomText ? (<div class={b('bottom-text')}>{keyData.bottomText}</div>) : ''}
            {typeof keyData.led === 'boolean' ? (<div class={b('led', { on: state.led })}></div>) : ''}
        </div>
    );
}
