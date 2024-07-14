import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { KeyData, LedData, SpacerData } from '../KeyboardKey';
import { KeyboardRow } from '../KeyboardRow';

const b = block('keyboard-layout');

export type KeyboardRowData = (KeyData | LedData | SpacerData)[];

export interface KeyboardLayoutData {
    type: 'mac' | 'win' | 'ipad',
    rows: KeyboardRowData[];
}

export interface KeyboardLayoutProps {
    layout: KeyboardLayoutData;
}

export function KeyboardLayout(props: KeyboardLayoutProps) {
    const { layout } = props;

    const items = layout.rows.map((rowData, num) => {
        return html`
            <div key="${num}" class="${b('row', { num } )}">
                <${KeyboardRow} rowData="${rowData}" //>
            </div>
        `;
    });

    return html`<div class="${b({ type: layout.type })}">${items}</div>`;
}
