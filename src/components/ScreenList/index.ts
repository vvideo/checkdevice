import { html } from 'htm/preact';
import { useCallback, useEffect } from 'preact/hooks';
import { block } from '../../utils/css/bem';
import { ScreenItemProps, ScreenItem } from '../ScreenItem';
import { Button } from '../Button';
import { i18n } from '../../i18n';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { screenInfo } from '../../lib/ScreenInfo';
import { hasTouchScreen } from '../../utils/hasTouchScreen';
import { getChecked } from '../../utils/getChecked';
import { getMaxTouchPoints } from '../../utils/getMaxTouchPoints';
import { RefreshRate } from '../RefreshRate';
import { RefreshRateController } from '../../lib/RefreshRateController';
import { PageTitle } from '../PageTitle';
import { isSsr } from '../../utils/isSsr';

import './index.css';
import { DescriptionList } from '../DescriptionList';

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

    const additionalItems = [
        RefreshRateController.hasSupport() ? [i18n('Refresh rate'), html`<${RefreshRate} //>`] : undefined,
        [i18n('Has touch screen'), getChecked(isSsr ? false : hasTouchScreen())],
        [i18n('Max touch points'), isSsr ? 0 : getMaxTouchPoints()],
    ];

    const screenInfoData = screenInfo.get();

    return html`<div class="${b()}">
        <${PageTitle}>
            ${screenInfoData.screens.length === 1 ? i18n('Screen') : i18n('Screens')}
        <//>

        ${!screenInfo.isDenied && screenInfo.needUserActivity ? html`<div class="${b('specify')}"><${Button} theme="red" size="s" onClick="${handleClick}">${i18n('Specify')}</button></div>` : ''}

        ${
            screenInfoData.screens.map(item => {
                return html`<${ScreenItem} ...${item}><//>`;
            })
        }

        <${DescriptionList} title="${i18n('Additionally')}" items="${additionalItems}" //>
    </div>`;
}
