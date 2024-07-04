import { html } from 'htm/preact';
import { KeysState } from '../Keyboard';
import { KeyboardKey } from '../KeyboardKey';
import { KeyboardRowData } from '../KeyboardLayout';
import { KeyboardLed } from '../KeyboardLed';
import { KeyboardSpacer } from '../KeyboardSpacer';

interface KeyboardRowProps {
    rowData: KeyboardRowData;
    keysState: KeysState;
}

export function KeyboardRow(props: KeyboardRowProps) {
    const { rowData, keysState } = props;

    return rowData.map((item, i) => {
        if (item.type === 'spacer') {
            return html`<${KeyboardSpacer} key="${i}" name="${item.name}" //>`
        }

        if (item.type === 'led') {
            return html`<${KeyboardLed} key="${i}" code="${item.code}" on="${(keysState[item.code] || {}).led}" //>`
        }

        return html`<${KeyboardKey} key="${i}" keyData="${item}" state="${keysState[item.code] || {}}" //>`;
    });
}
