import { html  } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';
import { KeyboardLayout } from '../KeyboardLayout';
import { RadioButtonProps } from '../RadioButton';
import { RadioButtons, getSelectedButton } from '../RadioButtons';
import { isIpad, isMacintosh } from '../../utils/platform';
import { keyboardStateController } from '../../lib/KeyboardStateController';
import { ipadKeyboardLayout } from '../KeyboardLayout/type/ipad';
import { macKeyboardLayout } from '../KeyboardLayout/type/mac';
import { macbookKeyboardLayout } from '../KeyboardLayout/type/macbook';
import { winKeyboardLayout } from '../KeyboardLayout/type/win';

import './index.css';

export const b = block('keyboard');

const platform = getPlatform();

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

function getLayoutData(layout: string) {
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

function getIsMacBook() {
    const { width, height } = window.screen;

    if ((width === 1440 && height === 900)) {
        return true;
    }

    return false;
}

function getPlatform() {
    if (isIpad()) {
        return 'ipad';
    }

    const isMacBook = getIsMacBook();

    if (isMacintosh()) {
        return isMacBook ? 'macbook' : 'mac';
    }

    return 'win';
}


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
