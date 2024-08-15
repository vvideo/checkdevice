import { html  } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n';
import { Button } from '../ui/Button';
import { getLayoutData, KeyboardLayout } from '../KeyboardLayout';
import { RadioButtonProps } from '../ui/RadioButton';
import { RadioButtons, getSelectedButton } from '../ui/RadioButtons';
import { keyboardStateController } from '../../lib/KeyboardStateController';
import { getPlatform } from './utils';
import { isSsr } from '../../utils/isSsr';

import './index.css';

export const b = block('keyboard');

const platform = isSsr ? 'win' : getPlatform();

export function Keyboard() {
    const buttons: RadioButtonProps[] = [
        {
            text: 'Win',
            value: 'win',
            title: i18n('Windows Logitech G810 keyboard'),
            selected: platform === 'win'
        },
        {
            text: 'Mac',
            value: 'mac',
            title: i18n('Apple Magic Keyboard with Numeric Keypad'),
            selected: platform === 'mac'
        },
        {
            text: 'MacBook',
            value: 'macbook',
            title: i18n('MacBook keyboard'),
            selected: platform === 'macbook',
        },
        {
            text: 'iPad',
            value: 'ipad',
            title: i18n('Apple Magic Keyboard for iPad'),
            selected: platform === 'ipad'
        }
    ];

    const selectedButton = getSelectedButton(buttons)
    const [layout, setLayout] = useState(selectedButton && selectedButton.value);

    const handleReset = useCallback(() => {
        keyboardStateController.clearState();
    }, []);

    const handleSelect = useCallback((value: string) => {
        setLayout(value);
    }, [layout]);

    return html`
        <div class="${b()}">
            <div class="${b('top-controls')}">
                <${RadioButtons} hideLabel label="${i18n('Select keyboard')}" onSelect="${handleSelect}" buttons="${buttons}"><//>
            </div>

            <${KeyboardLayout} layout="${getLayoutData(layout)}" //>

            <div class="${b('bottom-controls')}">
                <${Button} title="${i18n('Reset pressed keys on keyboard')}" size="m" onClick="${handleReset}">${i18n('Reset')}<//>
            </div>
        </div>
    `;
}
