import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { KeysState } from '../Keyboard';
import { KeyData, KeyboardKey } from '../KeyboardKey';

interface KeyboardRowProps {
    keysData: KeyData[];
    keysState: KeysState;
}

function KeyboardRow(props: KeyboardRowProps) {
    const { keysData, keysState } = props;

    return keysData.map((item, i) => {
        return html`<${KeyboardKey} key="${i}" keyData="${item}" state="${keysState[item.code] || {}}" //>`;
    });
}

const b = block('keyboard-layout');

export interface KeyboardLayoutProps {
    layout: KeyData[][];
    keysState: KeysState;
    type: 'mac';
}

export function KeyboardLayout(props: KeyboardLayoutProps) {
    const { keysState, layout, type } = props;

    const items = layout.map((item, num) => {
        return html`
            <div key="${num}" class="${b('row', { num } )}">
                <${KeyboardRow} keysData="${item}" keysState="${keysState}" //>
            </div>
        `;
    });

    return html`<div class="${b({ type })}">${items}</div>`;
}
