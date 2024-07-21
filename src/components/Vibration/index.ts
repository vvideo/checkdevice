import { useCallback } from 'preact/hooks';
import { Button } from '../Button';
import { html } from 'htm/preact';
import { WarningMessage } from '../WarningMessage';
import { i18n } from '../../i18n/i18n';
import { block } from '../../utils/bem';

import './index.css';

const b = block('vibration');

export function Vibration() {
    const onClick = useCallback(() => {
        navigator.vibrate(1000);
    }, []);

    const isSupported = typeof navigator.vibrate === 'function';

    if (!isSupported) {
        return html`<${WarningMessage}>${i18n('Vibration API is not supported.')}<//>`;
    }

    return html`
        <${Button} disabled="${!isSupported}" onClick=${onClick}>${i18n('Vibrate')}<//>

        <div class="${b('details')}">
            <${WarningMessage} theme="gray">${i18n('Support is mainly on mobile devices.')}<//>
        </div>
    `;
}
