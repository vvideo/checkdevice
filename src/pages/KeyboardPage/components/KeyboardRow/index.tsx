import { h } from 'preact';

import { KeyboardKey } from '../KeyboardKey/index.js';
import { KeyboardRowData } from '../KeyboardLayout/index.js';
import { KeyboardLed } from '../KeyboardLed/index.js';
import { KeyboardSpacer } from '../KeyboardSpacer/index.js';
import { block } from '../../../../utils/css/bem.js';

import './index.css';

interface KeyboardRowProps {
    rowData: KeyboardRowData;
}

const b = block('keyboard-row');

export function KeyboardRow(props: KeyboardRowProps) {
    const { rowData } = props;

    return (<div class={b()}>
        {rowData.map((item, i) => {
            if (item.type === 'spacer') {
                return (<KeyboardSpacer key={i} name={item.name} />);
            }

            if (item.type === 'led') {
                return (<KeyboardLed key={i} code={item.code} />);
            }

            return (<KeyboardKey key={i} keyData={item} />);
        })}
    </div>);
}
