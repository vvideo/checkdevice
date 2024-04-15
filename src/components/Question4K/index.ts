import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { isAV1Supported, isHevcMainSupported, isVp9Supported } from 'detect-audio-video';
import { Result } from '../Result';
import { ActiveQuestion } from '../ActiveQuestion';
import { Codec } from '../Codec';
import { isScreensLargerThan2K, screenInfo } from '../../lib/ScreenInfo';
import { i18n } from '../../i18n/i18n';

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

    const isVp9 = isVp9Supported().any;
    const isHevc = isHevcMainSupported().any;
    const isAv1 = isAV1Supported().any;
    const largeThan2K = isScreensLargerThan2K(screens);
    const mainAnswer = largeThan2K && Boolean(isVp9 || isHevc || isAv1);
    const head = html`${i18n('Can I watch 4K video?')} <${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>${i18n('Is the screen larger than 2K?')}\u00a0<${Result} value="${largeThan2K}"><//></li>
                <li>
                    ${i18n('Has support one of the video codecs?')}\u00a0<${Result} value=${true}><//>
                    <ul>
                        <li>
                            <${Codec}
                                name="VP9"
                                color="green"
                                disabled="${!isVp9}">
                                <//>\u00a0<${Result} value="${isVp9}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="H.265"
                                color="orange"
                                disabled="${!isHevc}">
                                <//>\u00a0<${Result} value="${isHevc}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="AV1"
                                color="yellow"
                                disabled="${!isAv1}">
                                <//>\u00a0<${Result} value="${isAv1}"><//>
                        </li>
                    </ul>
                </li>
            </ul>
        <//>
    `;
}

