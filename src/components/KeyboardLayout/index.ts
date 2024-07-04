import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { KeysState } from '../Keyboard';
import { KeyData, LedData, SpacerData } from '../KeyboardKey';
import { KeyboardRow } from '../KeyboardRow';

const b = block('keyboard-layout');

export type KeyboardRowData = (KeyData | LedData | SpacerData)[];

export interface KeyboardLayoutData {
    type: 'mac' | 'win',
    rows: KeyboardRowData[];
}

export interface KeyboardLayoutProps {
    layout: KeyboardLayoutData;
    keysState: KeysState;
}

export function KeyboardLayout(props: KeyboardLayoutProps) {
    const { keysState, layout } = props;

    const items = layout.rows.map((rowData, num) => {
        return html`
            <div key="${num}" class="${b('row', { num } )}">
                <${KeyboardRow} rowData="${rowData}" keysState="${keysState}" //>
            </div>
        `;
    });

    return html`<div class="${b({ type: layout.type })}">${items}</div>`;
}
