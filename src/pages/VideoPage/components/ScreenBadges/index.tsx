import { h } from 'preact';

import { useCallback, useEffect } from 'preact/hooks';
import { ScreenBadge } from '../ScreenBadge';
import { Section } from '../../../../components/ui/Section';
import { needAdditionalMonitorWarning, screenInfo } from '../../../../lib/ScreenInfo';
import { i18n } from '../../../../i18n';
import { block } from '../../../../utils/css/bem';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { Button } from '../../../../components/ui/Button';

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

        if (!screenInfo.isDenied) {
            screenInfo.getScreenDetails()
                .then(handleScreenChange)
                .catch(handleScreenChange);
        }

        return () => {
            screenInfo.removeListener(handleScreenChange);
        };
    }, []);

    const screenInfoData = screenInfo.get();
    const content = screenInfoData.map(item => {
        return (<ScreenBadge {...item} />);
    });

    const name = screenInfoData.length > 1 ? i18n('Screens') : i18n('Screen');

    return (<Section name={name}>
        {!screenInfo.isDenied && screenInfo.needUserActivity ? (<div class={b('specify')}><Button size="s" theme="red" onClick={handleClick}>{i18n('Specify')}</Button></div>) : ''}
        {content}
        {needAdditionalMonitorWarning() ? (<div class={b('additional')}>⚠️ {i18n('Additional monitor detected')}</div>) : ''}
    </Section>);
}
