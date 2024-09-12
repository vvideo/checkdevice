import { h } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';

import { block } from '../../../../utils/css/bem';
import { ScreenItemProps, ScreenItem } from '../ScreenItem';
import { Button } from '../../../../components/ui/Button';
import { i18n } from '../../../../i18n';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { screenInfo } from '../../../../lib/ScreenInfo';
import { hasTouchScreen } from '../../../../utils/device/hasTouchScreen';
import { getChecked } from '../../../../utils/string/getChecked';
import { getMaxTouchPoints } from '../../../../utils/device/getMaxTouchPoints';
import { RefreshRate } from '../RefreshRate';
import { RefreshRateController } from '../../../../lib/RefreshRateController';
import { PageTitle } from '../../../../components/PageTitle';
import { isSsr } from '../../../../utils/isSsr';
import { DescriptionList } from '../../../../components/DescriptionList';

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

        if (!screenInfo.isDenied) {
            screenInfo.getScreenDetails()
                .then(handleScreenChange)
                .catch(handleScreenChange);
        }

        return () => {
            screenInfo.removeListener(handleScreenChange);
        };
    }, []);

    const additionalItems: [string, string | number | h.JSX.Element][] = [
        RefreshRateController.hasSupport() ? [i18n('Refresh rate'), (<RefreshRate />)] : ['', ''],
        [i18n('Has touch screen'), getChecked(isSsr ? false : hasTouchScreen())],
        [i18n('Max touch points'), isSsr ? 0 : getMaxTouchPoints()],
    ];

    const screenInfoData = screenInfo.get();

    return (<div class={b()}>
        <PageTitle>
            {screenInfoData.length === 1 ? i18n('Screen') : i18n('Screens')}
        </PageTitle>

        {!screenInfo.isDenied && screenInfo.needUserActivity ? (<div class={b('specify')}><Button theme="red" size="s" onClick={handleClick}>{i18n('Specify')}</Button></div>) : ''}

        {
            screenInfoData.map(item => {
                return (<ScreenItem {...item} />);
            })
        }

        <DescriptionList title={i18n('Additionally')} items={additionalItems} />
    </div>);
}
