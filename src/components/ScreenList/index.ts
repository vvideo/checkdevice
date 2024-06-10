import { html } from 'htm/preact';
import { useCallback, useEffect } from 'preact/hooks';
import { block } from '../../utils/bem';
import { ScreenItemProps, ScreenItem } from '../ScreenItem';
import { Button } from '../Button';
import { Header } from '../Header';
import { i18n } from '../../i18n/i18n';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { screenInfo } from '../../lib/ScreenInfo';

import './index.css';

export interface ScreenList {
    items: ScreenItemProps[];
}

const b = block('screen-list');

export function ScreenList() {
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

    return html`<div class="${b()}">
        <${Header}>
            ${screenInfoData.screens.length === 1 ? i18n('Screen') : i18n('Screens')}
        <//>

        ${!screenInfo.isDenied && screenInfo.needUserActivity ? html`<div class="${b('specify')}"><${Button} theme="red" size="s" onClick="${handleClick}">${i18n('Specify')}</button></div>` : ''}

        ${
            screenInfoData.screens.map(item => {
                return html`<${ScreenItem} ...${item}><//>`;
            })
        }
    </div>`;
}
