import { html  } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';
import { getLayoutData, KeyboardLayout } from '../KeyboardLayout';
import { RadioButtonProps } from '../RadioButton';
import { RadioButtons, getSelectedButton } from '../RadioButtons';
import { keyboardStateController } from '../../lib/KeyboardStateController';
import { getPlatform } from './utils';
import { isSsr } from '../../utils/isSsr';

import './index.css';

export const b = block('keyboard');

const platform = isSsr ? 'win' : getPlatform();

const buttons: RadioButtonProps[] = [
    {
        text: 'Win',
        value: 'win',
        selected: platform === 'win'
    },
    {
        text: 'Mac',
        value: 'mac',
        selected: platform === 'mac'
    },
    {
        text: 'MacBook',
        value: 'macbook',
        selected: platform === 'macbook'
    },
    {
        text: 'iPad',
        value: 'ipad',
        selected: platform === 'ipad'
    }
];

export function Keyboard() {
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
                <${RadioButtons} onSelect="${handleSelect}" buttons="${buttons}"><//>
            </div>

            <${KeyboardLayout} layout="${getLayoutData(layout)}" //>

            <div class="${b('bottom-controls')}">
                <${Button} size="m" onClick="${handleReset}">${i18n('Reset')}<//>
            </div>
        </div>
    `;
}
