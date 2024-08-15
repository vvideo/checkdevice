import { html } from 'htm/preact';
import { useEffect, useRef } from 'preact/hooks';
import { RefreshRateController } from '../../lib/RefreshRateController';
import { Spinner } from '../ui/Spinner';
import { i18n } from '../../i18n';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { block } from '../../utils/css/bem';

import './index.css';

const b = block('refresh-rate');

export function RefreshRate() {
    const ref = useRef<RefreshRateController>();
    if (!ref.current) {
        ref.current = new RefreshRateController();
    }

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        const timer = window.setInterval(forceUpdate, 500);

        ref.current?.start();

        return () => {
            window.clearInterval(timer);
            ref.current?.stop();
        };
    }, []);

    const value = ref.current?.get();

    return value ? html`<span class="${b()}">${value.toFixed(3)} ${i18n('Hz')}</span>` : html`<${Spinner} size="s" //>`;
}
