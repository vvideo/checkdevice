import { html } from 'htm/preact';
import { block } from '../../utils/bem';

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

export interface KeyState {
    pressed: boolean;
    wasPressed: boolean;
    led: boolean;
}

interface KeyboardKeyProps {
    state: KeyState;
    keyData: KeyData;
}

const b = block('keyboard-key');

export function KeyboardKey(props: KeyboardKeyProps) {
    const { state, keyData } = props;

    return html`
        <div class="${b({ align: keyData.align, code: keyData.code, pressed: state.pressed, wasPressed: state.wasPressed, view: keyData.view })}">
            ${keyData.text || ''}
            ${keyData.topSymbol ? html`<div class="${b('top-symbol')}">${keyData.topSymbol}</div>` : ''}
            ${keyData.topLeftSymbol ? html`<div class="${b('top-left-symbol')}">${keyData.topLeftSymbol}</div>` : ''}
            ${keyData.topRightSymbol ? html`<div class="${b('top-right-symbol')}">${keyData.topRightSymbol}</div>` : ''}
            ${keyData.bottomLeftSymbol ? html`<div class="${b('bottom-left-symbol')}">${keyData.bottomLeftSymbol}</div>` : ''}
            ${keyData.bottomRightSymbol ? html`<div class="${b('bottom-right-symbol')}">${keyData.bottomRightSymbol}</div>` : ''}
            ${keyData.bottomSymbol ? html`<div class="${b('bottom-symbol')}">${keyData.bottomSymbol}</div>` : ''}
            ${keyData.bottomText ? html`<div class="${b('bottom-text')}">${keyData.bottomText}</div>` : ''}
            ${typeof keyData.led === 'boolean' ? html`<div class="${b('led', { on: state.led })}"></div>` : ''}
        </div>`;
}
