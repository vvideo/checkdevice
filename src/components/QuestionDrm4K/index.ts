import { useEffect, useState } from 'preact/hooks';
import { html } from 'htm/preact';
import {
    AV1_CONTENT_TYPE,
    HEV_MAIN_CONTENT_TYPE,
    PLAYREADY_RECOMMENDATION_KEY_SYSTEM,
    VP9_CONTENT_TYPE,
    WIDEWINE_KEY_SYSTEM,
    isAV1Supported,
    isFairPlaySupported,
    isHevcMainSupported,
    isPlayReadySL3000Supported,
    isPlayReadySupported,
    isVp9Supported,
    isWidevineL1Supported,
    isWidevineSupported,
} from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';
import { i18n } from '../../i18n/i18n';
import { isScreensLargerThan2K, needHdcpWarning, screenInfo } from '../../lib/ScreenInfo';
import { isDesktopSafari } from '../../utils/isDesktopSafari';
import { getCachedCheckAllHdcpVersions } from '../../utils/drm/getCachedCheckAllHdcpVersions';
import { noop } from '../../utils/noop';
import { isUhdHdcpSupported } from 'hdcp';
import { Link } from '../Link';
import { isSsr } from '../../utils/isSsr';

export function QuestionDrm4K() {
    const [isWidevine, setIsWidevine] = useState(false);
    const [isWidevineL1Vp9, setIsWidevineL1Vp9] = useState(false);
    const [isWidevineL1Hevc, setIsWidevineL1Hevc] = useState(false);
    const [isWidevineL1Av1, setIsWidevineL1Av1] = useState(false);

    const [isPlayReady, setIsPlayReady] = useState(false);
    const [isPlayReadySL3000Vp9, setIsPlayReadySL3000Vp9] = useState(false);
    const [isPlayReadySL3000Hevc, setIsPlayReadySL3000Hevc] = useState(false);
    const [isPlayReadySL3000Av1, setIsPlayReadySL3000Av1] = useState(false);

    const [isFairplay, setIsFairplay] = useState(false);
    const [isFairplayVp9, setIsFairplayVp9] = useState(false);
    const [isFairplayHevc, setIsFairplayHevc] = useState(false);
    const [isFairplayAv1, setIsFairplayAv1] = useState(false);

    const [hasWidevineNeededHdcp, setWidevineNeededHdcp] = useState<null | boolean>(null);
    const [hasPlayReadyNeededHdcp, setPlayReadyNeededHdcp] = useState<null | boolean>(null);

    const [screens, setScreens] = useState(screenInfo.get().screens);

    useEffect(() => {
        const handler = () => {
            setScreens(screenInfo.get().screens);
        };

        screenInfo.addListener(handler);

        return () => {
            screenInfo.removeListener(handler);
        };
    }, [screens]);

    useEffect(() => {
        getCachedCheckAllHdcpVersions(WIDEWINE_KEY_SYSTEM).then((data) => {
            const result = isUhdHdcpSupported(data);
            setWidevineNeededHdcp(result);
        }).catch(noop);

        getCachedCheckAllHdcpVersions(PLAYREADY_RECOMMENDATION_KEY_SYSTEM).then((data) => {
            const result = isUhdHdcpSupported(data);
            setPlayReadyNeededHdcp(result);
        }).catch(noop);

        isWidevineSupported().then(result => {
            setIsWidevine(result);
        });

        isWidevineL1Supported({
            videoCapabilities: [{ contentType: VP9_CONTENT_TYPE }]
        }).then(result => {
            setIsWidevineL1Vp9(result);
        });

        isWidevineL1Supported({
            videoCapabilities: [{ contentType: HEV_MAIN_CONTENT_TYPE }]
        }).then(result => {
            setIsWidevineL1Hevc(result);
        });

        isWidevineL1Supported({
            videoCapabilities: [{ contentType: AV1_CONTENT_TYPE }]
        }).then(result => {
            setIsWidevineL1Av1(result);
        });

        isPlayReadySupported().then(result => {
            setIsPlayReady(result);
        });

        isPlayReadySL3000Supported({
            videoCapabilities: [{ contentType: VP9_CONTENT_TYPE }]
        }).then(result => {
            setIsPlayReadySL3000Vp9(result);
        });

        isPlayReadySL3000Supported({
            videoCapabilities: [{ contentType: HEV_MAIN_CONTENT_TYPE }]
        }).then(result => {
            setIsPlayReadySL3000Hevc(result);
        });

        isPlayReadySL3000Supported({
            videoCapabilities: [{ contentType: AV1_CONTENT_TYPE }]
        }).then(result => {
            setIsPlayReadySL3000Av1(result);
        });

        isFairPlaySupported().then(result => {
            setIsFairplay(result);
            setIsFairplayVp9(result && isVp9Supported().any);
            setIsFairplayHevc(result && isHevcMainSupported().any);
            setIsFairplayAv1(result && isAV1Supported().any);
        });
    }, [
        isWidevineL1Vp9, isWidevineL1Hevc, isWidevineL1Av1,
        isPlayReadySL3000Vp9, isPlayReadySL3000Hevc, isPlayReadySL3000Av1,
        isFairplayVp9, isFairplayHevc, isFairplayAv1,
    ]);

    const anyCodecWithWidevine = hasWidevineNeededHdcp !== false && (isWidevineL1Vp9 || isWidevineL1Hevc || isWidevineL1Av1);
    const anyCodecWithPlayReady = hasPlayReadyNeededHdcp !== false && isPlayReadySL3000Vp9 || isPlayReadySL3000Hevc || isPlayReadySL3000Av1;
    const anyCodecWithFairplay = isFairplayVp9 || isFairplayHevc || isFairplayAv1;

    const anyCodecWithDrm = Boolean(
        anyCodecWithWidevine ||
        anyCodecWithPlayReady ||
        anyCodecWithFairplay
    );

    const largeThan2K = isScreensLargerThan2K(screens);
    const answer = anyCodecWithDrm && largeThan2K;

    const isSafari = !isSsr && isDesktopSafari();
    const hasCommonWarning = isSafari;
    const head = html`${i18n('Can I watch 4K video on online services?')}\u00a0<${Result} value="${answer}"><//>${hasCommonWarning ? '\u00a0⚠️' : ''}`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>${i18n('Is the screen larger than 2K?')}\u00a0<${Result} value="${largeThan2K}"><//></li>
                <li>${i18n('Online services protect content using')}${'\u00a0'}<${Link} target="_blank" href="${i18n('link:wiki:drm')}">DRM<//>.<br/>
                    ${i18n('Supports one of the video codecs and DRM with high security level?')} <${Result} value=${anyCodecWithDrm}><//>
                    <ul>
                        ${DrmItem({
                            name: 'Google Widevine L1',
                            hasNeededHdcp: hasWidevineNeededHdcp,
                            isSupported: isWidevine,
                            isVp9Supported: isWidevineL1Vp9,
                            isHevcSupported: isWidevineL1Hevc,
                            isAv1Supported: isWidevineL1Av1,
                        })}

                        ${DrmItem({
                            name: 'Microsoft PlayReady SL3000',
                            hasNeededHdcp: hasPlayReadyNeededHdcp,
                            isSupported: isPlayReady,
                            isVp9Supported: isPlayReadySL3000Vp9,
                            isHevcSupported: isPlayReadySL3000Hevc,
                            isAv1Supported: isPlayReadySL3000Av1,
                        })}

                        ${DrmItem({
                            name: 'Apple FairPlay',
                            hasNeededHdcp: null,
                            isSupported: isFairplay,
                            isVp9Supported: isFairplayVp9,
                            isHevcSupported: isFairplayHevc,
                            isAv1Supported: isFairplayAv1,
                        })}
                    </ul>
                </li>
                ${needHdcpWarning() ? html`<li>
                    ⚠️ ${i18n('Make sure that monitors, video cards, and cables support HDCP 2.2 or later.')}
                </li>` : ''}
                ${isSafari ? html`<li>
                    ⚠️ ${i18n('Select 2018 or later Mac computer with an')} <${Link} href="${i18n('link:apple:t2')}" target="_blank">Apple T2 Security Chip<//>.
                </li>` : ''}
            </ul>
        <//>
    `;
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

    return isSupported ? html`<li>${name}
        <ul>
            ${hasNeededHdcp === null ? '' :
                html`<li>${i18n('HDCP 2.2 or later')} <${Result} value="${hasNeededHdcp}" //></li>`
            }
            <li>
                <${Codec}
                    name="VP9"
                    color="green"
                    disabled="${!isVp9Supported}">
                <//>\u00a0<${Result} value="${isVp9Supported}"><//>
            </li>
            <li>
                <${Codec}
                    name="H.265"
                    color="orange"
                    disabled="${!isHevcSupported}">
                <//>\u00a0<${Result} value="${isHevcSupported}"><//>
            </li>
            <li>
                <${Codec}
                    name="AV1"
                    color="yellow"
                    disabled="${!isAv1Supported}">
                <//>\u00a0<${Result} value="${isAv1Supported}"><//>
            </li>
        </ul>
    </li>` : '';
}
