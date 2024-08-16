import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { isAV1Supported, isHevcMainSupported, isVp9Supported } from 'detect-audio-video';
import { Result } from '../ui/Result';
import { ActiveQuestion } from '../ActiveQuestion';
import { Codec } from '../Codec';
import { isScreensLargerThan2K, screenInfo } from '../../lib/ScreenInfo';
import { i18n } from '../../i18n';
import { CodecDetails } from '../CodecDetails';

export function Question4K() {
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

    const isVp9 = isVp9Supported();
    const isHevc = isHevcMainSupported();
    const isAv1 = isAV1Supported();
    const largeThan2K = isScreensLargerThan2K(screens);
    const mainAnswer = largeThan2K && Boolean(isVp9.any || isHevc.any || isAv1.any);
    const head = html`${i18n('Can I watch 4K video?')}\u00a0<${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>${i18n('Is the screen larger than 2K?')}\u00a0<${Result} value="${largeThan2K}"><//></li>
                <li>
                    ${i18n('Supports one of the video codecs?')}\u00a0<${Result} value=${true}><//>
                    <ul>
                        <li>
                            <${Codec}
                                name="VP9"
                                color="green"
                                disabled="${!isVp9.any}"
                                tooltip="${CodecDetails(isVp9)}">
                                <//>\u00a0<${Result} value="${isVp9.any}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="H.265"
                                color="orange"
                                disabled="${!isHevc.any}"
                                tooltip="${CodecDetails(isHevc)}">
                                <//>\u00a0<${Result} value="${isHevc.any}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="AV1"
                                color="yellow"
                                disabled="${!isAv1.any}">
                                tooltip="${CodecDetails(isAv1)}">
                                <//>\u00a0<${Result} value="${isAv1.any}"><//>
                        </li>
                    </ul>
                </li>
            </ul>
        <//>
    `;
}

