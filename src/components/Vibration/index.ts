import { useCallback } from 'preact/hooks';
import { Button } from '../Button';
import { html } from 'htm/preact';
import { WarningMessage } from '../WarningMessage';
import { i18n } from '../../i18n';
import { block } from '../../utils/css/bem';

import './index.css';
import { isSsr } from '../../utils/isSsr';

const b = block('vibration');

export function Vibration() {
    const onClick = useCallback(() => {
        navigator.vibrate(1000);
    }, []);

    const isSupported = typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';

    if (!isSsr && !isSupported) {
        return '';
    }

    return html`<div class="${b()}">
        <${Button} disabled="${!isSupported}" onClick=${onClick}>${i18n('Vibrate')}<//>

        <div class="${b('details')}">
            <${WarningMessage} theme="gray">${i18n('Support is mainly on mobile devices.')}<//>
        </div>
    </div>`;
}
