import { html } from 'htm/preact';
import { useCallback, useState, useEffect } from 'preact/hooks';
import { ScreenBadge } from '../ScreenBadge';
import { Row } from '../Row';
import { screenInfo } from '../../lib/ScreenInfo';
import { i18n } from '../../i18n/i18n';
import { block } from '../../utils/bem';
import { noop } from '../../utils/noop';

import './index.css';

const b = block('screen-badges');

export function ScreenBadges() {
    let [forceRender, setForceRender] = useState(0);

    const handleScreenChange = useCallback(() => {
        setForceRender(forceRender++);
    }, []);

    const handleClick = useCallback(() => {
        screenInfo.getScreenDetails().catch(noop);
    }, []);

    useEffect(() => {
        screenInfo.addListener(handleScreenChange);

        return () => {
            screenInfo.removeListener(handleScreenChange);
        };
    }, []);

    const { screens, isScreenDetails } = screenInfo.get();
    const content = screens.map(item => {
        const props = {
            isScreenDetails,
            ...item,
        };

        return html`<${ScreenBadge} ...${props}><//>`;
    });

    const name = screens.length > 1 ? i18n('Screens') : i18n('Screen');

    return html`<${Row} name="${name}">
        ${screenInfo.needUserActivity ? html`<div><button onClick="${handleClick}">${i18n('Request')}</button></div>` : ''}
        ${content}
        ${!isScreenDetails && screen.isExtended === true ? html`<div class="${b('additional')}">⚠️ ${i18n('Additional monitor detected')}</div>` : ''}
    <//>`;
}
