import { html } from 'htm/preact';
import { useCallback, useEffect } from 'preact/hooks';
import { ScreenBadge } from '../ScreenBadge';
import { Row } from '../Row';
import { screenInfo } from '../../lib/ScreenInfo';
import { i18n } from '../../i18n/i18n';
import { block } from '../../utils/css/bem';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { Button } from '../Button';

import './index.css';

const b = block('screen-badges');

export function ScreenBadges() {
    const forceUpdate = useForceUpdate();

    const handleScreenChange = useCallback(() => {
        forceUpdate();
    }, []);

    const handleClick = useCallback(() => {
        screenInfo.getScreenDetails()
            .then(handleScreenChange)
            .catch(handleScreenChange);
    }, []);

    useEffect(() => {
        screenInfo.addListener(handleScreenChange);

        !screenInfo.isDenied && screenInfo.getScreenDetails()
            .then(handleScreenChange)
            .catch(handleScreenChange);

        return () => {
            screenInfo.removeListener(handleScreenChange);
        };
    }, []);

    const screenInfoData = screenInfo.get();
    const content = screenInfoData.screens.map(item => {
        const props = {
            isScreenDetails: screenInfo.isScreenDetails,
            ...item,
        };

        return html`<${ScreenBadge} ...${props}><//>`;
    });

    const name = screenInfoData.screens.length > 1 ? i18n('Screens') : i18n('Screen');

    return html`<${Row} name="${name}">
        ${!screenInfo.isDenied && screenInfo.needUserActivity ? html`<div class="${b('specify')}"><${Button} size="s" theme="red" onClick="${handleClick}">${i18n('Specify')}<//></div>` : ''}
        ${content}
        ${!screenInfo.isScreenDetails && (typeof screen !== 'undefined' && screen.isExtended === true) ? html`<div class="${b('additional')}">⚠️ ${i18n('Additional monitor detected')}</div>` : ''}
    <//>`;
}
