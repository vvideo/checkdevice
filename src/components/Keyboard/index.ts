import { html  } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';
import { KeyboardLayout } from '../KeyboardLayout';
import { winKeyboardLayout } from '../KeyboardLayout/type/win';
import { RadioButtonProps } from '../RadioButton';
import { RadioButtons, getSelectedButton } from '../RadioButtons';
import { macKeyboardLayout } from '../KeyboardLayout/type/mac';
import { isMacintosh, isWindows } from '../../utils/platform';
import { keyboardStateController } from '../../lib/KeyboardStateController';

import './index.css';

export const b = block('keyboard');

const buttons: RadioButtonProps[] = [
    {
        text: 'Win',
        value: 'win',
        selected: isWindows()
    },
    {
        text: 'Mac',
        value: 'mac',
        selected: isMacintosh()
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

            <${KeyboardLayout} layout="${layout === 'win' ? winKeyboardLayout : macKeyboardLayout}" //>

            <div class="${b('bottom-controls')}">
                <${Button} size="m" onClick="${handleReset}">${i18n('Reset')}<//>
            </div>
        </div>
    `;
}
