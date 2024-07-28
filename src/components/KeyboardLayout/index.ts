import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { KeyData, LedData, SpacerData } from '../KeyboardKey';
import { KeyboardRow } from '../KeyboardRow';
import { ipadKeyboardLayout } from './type/ipad';
import { macKeyboardLayout } from './type/mac';
import { macbookKeyboardLayout } from './type/macbook';
import { winKeyboardLayout } from './type/win';

const b = block('keyboard-layout');

export type KeyboardRowData = (KeyData | LedData | SpacerData)[];

export interface KeyboardLayoutData {
    type: 'macbook' | 'mac' | 'win' | 'ipad',
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

export function getLayoutData(layout: string) {
    switch (layout) {
        case 'ipad':
            return ipadKeyboardLayout;
        case 'mac':
            return macKeyboardLayout;
        case 'macbook':
            return macbookKeyboardLayout;
        default:
            return winKeyboardLayout;
    }
}
