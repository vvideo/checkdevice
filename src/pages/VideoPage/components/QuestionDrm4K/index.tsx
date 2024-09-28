import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { ActiveQuestion } from '../../../../components/ActiveQuestion';
import { Result } from '../../../../components/ui/Result';
import { Codec } from '../../../../components/Codec';
import { i18n } from '../../../../i18n';
import { isScreensLargerThan2K, needHdcpWarning, screenInfo } from '../../../../lib/ScreenInfo';
import { isDesktopSafari } from '../../../../utils/device/isDesktopSafari';
import { isSsr } from '../../../../utils/isSsr';
import { ExtLink } from '../../../../components/ui/ExtLink';
import { QuestionDrm4KController } from './QuestionDrm4KController';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { noop } from '../../../../utils/function/noop';

const questioDrm4KController = new QuestionDrm4KController();

export function QuestionDrm4K() {
    const forceUpdate = useForceUpdate();
    const [screens, setScreens] = useState(screenInfo.get());

    useEffect(() => {
        const handler = () => {
            setScreens(screenInfo.get());
        };

        screenInfo.addListener(handler);

        questioDrm4KController.get().then(() => {
            forceUpdate();
        }).catch(noop);

        return () => {
            screenInfo.removeListener(handler);
        };
    }, [screens, forceUpdate]);

    const anyCodecWithWidevine = questioDrm4KController.hasWidevineNeededHdcp !== false &&
        (
            questioDrm4KController.isWidevineL1Vp9 ||
            questioDrm4KController.isWidevineL1Hevc ||
            questioDrm4KController.isWidevineL1Av1
        );

    const anyCodecWithPlayReady = questioDrm4KController.hasPlayReadyNeededHdcp !== false &&
        questioDrm4KController.isPlayReadySL3000Vp9 ||
        questioDrm4KController.isPlayReadySL3000Hevc ||
        questioDrm4KController.isPlayReadySL3000Av1;

    const anyCodecWithFairplay = questioDrm4KController.isFairplayVp9 ||
        questioDrm4KController.isFairplayHevc ||
        questioDrm4KController.isFairplayAv1;

    const anyCodecWithDrm = Boolean(
        anyCodecWithWidevine ||
        anyCodecWithPlayReady ||
        anyCodecWithFairplay
    );

    const largeThan2K = isScreensLargerThan2K(screens);
    const answer = anyCodecWithDrm && largeThan2K;

    const isSafari = !isSsr && isDesktopSafari();
    const hasCommonWarning = isSafari;
    const head = (<span>{i18n('Can I watch 4K video on online services?')}{'\u00a0'}<Result value={answer} />{hasCommonWarning ? '\u00a0⚠️' : ''}</span>);

    return (
        <ActiveQuestion head={head}>
            <ul>
                <li>{i18n('Is the screen larger than 2K?')}{'\u00a0'}<Result value={largeThan2K} /></li>
                <li>{i18n('Online services protect content using')}{'\u00a0'}<ExtLink target="_blank" href={i18n('link:wiki:drm')}>DRM</ExtLink>.<br/>
                    {i18n('Supports one of the video codecs and DRM with high security level?')} <Result value={anyCodecWithDrm} />
                    <ul>
                        <DrmItem
                            name="Google Widevine L1"
                            hasNeededHdcp={questioDrm4KController.hasWidevineNeededHdcp}
                            isSupported={questioDrm4KController.isWidevine}
                            isVp9Supported={questioDrm4KController.isWidevineL1Vp9}
                            isHevcSupported={questioDrm4KController.isWidevineL1Hevc}
                            isAv1Supported={questioDrm4KController.isWidevineL1Av1}
                        />

                        <DrmItem
                            name="Microsoft PlayReady SL3000"
                            hasNeededHdcp={questioDrm4KController.hasPlayReadyNeededHdcp}
                            isSupported={questioDrm4KController.isPlayReady}
                            isVp9Supported={questioDrm4KController.isPlayReadySL3000Vp9}
                            isHevcSupported={questioDrm4KController.isPlayReadySL3000Hevc}
                            isAv1Supported={questioDrm4KController.isPlayReadySL3000Av1}
                        />

                        <DrmItem
                            name="Apple FairPlay"
                            hasNeededHdcp={null}
                            isSupported={questioDrm4KController.isFairplay}
                            isVp9Supported={questioDrm4KController.isFairplayVp9}
                            isHevcSupported={questioDrm4KController.isFairplayHevc}
                            isAv1Supported={questioDrm4KController.isFairplayAv1}
                        />
                    </ul>
                </li>
                {needHdcpWarning() ? (<li>
                    ⚠️ {i18n('Make sure that monitors, video cards, and cables support HDCP 2.2 or later.')}
                </li>) : ''}
                {isSafari ? (<li>
                    ⚠️ {i18n('Select 2018 or later Mac computer with an')} <ExtLink href={i18n('link:apple:t2')}>Apple T2 Security Chip</ExtLink>.
                </li>) : ''}
            </ul>
        </ActiveQuestion>
    );
}

interface DrmItemProps {
    name: string;
    hasNeededHdcp: boolean | null;
    isSupported: boolean;
    isVp9Supported: boolean;
    isHevcSupported: boolean;
    isAv1Supported: boolean;
}

function DrmItem(props: DrmItemProps) {
    const { isSupported, name, hasNeededHdcp, isVp9Supported, isHevcSupported, isAv1Supported } = props;

    return isSupported ? (<li>{name}
        <ul>
            {hasNeededHdcp === null ? '' :
                (<li>{i18n('HDCP 2.2 or later')} <Result value={hasNeededHdcp} /></li>)
            }
            <li>
                <Codec
                    name="VP9"
                    color="green"
                    disabled={!isVp9Supported}
                />{'\u00a0'}<Result value={isVp9Supported} />
            </li>
            <li>
                <Codec
                    name="H.265"
                    color="orange"
                    disabled={!isHevcSupported}
                />{'\u00a0'}<Result value={isHevcSupported} />
            </li>
            <li>
                <Codec
                    name="AV1"
                    color="yellow"
                    disabled={!isAv1Supported}
                />{'\u00a0'}<Result value={isAv1Supported} />
            </li>
        </ul>
    </li>) : null;
}
