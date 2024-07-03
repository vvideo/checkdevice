import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { KeysState } from '../Keyboard';
import { KeyData, KeyboardKey, LedData, SpacerData } from '../KeyboardKey';
import { KeyboardSpacer } from '../KeyboardSpacer';
import { KeyboardLed } from '../KeyboardLed';

interface KeyboardRowProps {
    rowData: KeyboardRowData;
    keysState: KeysState;
}

function KeyboardRow(props: KeyboardRowProps) {
    const { rowData, keysState } = props;

    return rowData.map((item, i) => {
        if (item.type === 'spacer') {
            return html`<${KeyboardSpacer} name="${item.name}" //>`
        }

        if (item.type === 'led') {
            return html`<${KeyboardLed} code="${item.code}" on="${(keysState[item.code] || {}).led}" //>`
        }

        return html`<${KeyboardKey} key="${i}" keyData="${item}" state="${keysState[item.code] || {}}" //>`;
    });
}

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
