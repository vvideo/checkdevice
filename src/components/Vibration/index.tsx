import { h } from 'preact';
import { useCallback } from 'preact/hooks';
import { Button } from '../ui/Button';
import { WarningMessage } from '../ui/WarningMessage';
import { i18n } from '../../i18n';
import { block } from '../../utils/css/bem';
import { isSsr } from '../../utils/isSsr';
import { isMobile } from 'detect-audio-video';
import { Section } from '../ui/Section';

import './index.css';

const b = block('vibration');

export function Vibration() {
    const onClick = useCallback(() => {
        navigator.vibrate(1000);
    }, []);

    const isSupported = typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';

    if (!isSsr && !isSupported) {
        return '';
    }

    return (<Section class={b()} name={i18n('Vibration')}>
        <div>
            <Button onClick={onClick} title={i18n('Check vibration')}>{i18n('Vibrate')}</Button>
            {
                !isSsr && isMobile() ? '' : (<div class={b('details')}>
                    <WarningMessage theme="gray">{i18n('Support is mainly on mobile devices.')}</WarningMessage>
                </div>)
            }
        </div>
    </Section>);
}
