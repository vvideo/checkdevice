import { html } from 'htm/preact';
import { block } from '../../utils/bem';

export interface KeyData {
    code: string;
    name: string;
    led?: boolean;
}

export interface KeyState {
    name: string;
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
        <div class="${b({ code: keyData.code, pressed: state.pressed, wasPressed: state.wasPressed })}">
            ${keyData.name}
            ${typeof keyData.led === 'boolean' ? html`<div class="${b('led', { on: state.led })}"></div>` : ''}
        </div>`;
}
