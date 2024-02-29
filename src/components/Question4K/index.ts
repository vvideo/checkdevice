import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { isAV1Supported, isHevcMainSupported, isVp9Supported } from 'detect-audio-video';
import { Result } from '../Result';
import { ActiveQuestion } from '../ActiveQuestion';
import { Codec } from '../Codec';
import { screenInfo } from '../../lib/ScreenInfo';
import { i18n } from '../../i18n/i18n';

const FULL_HD_HEIGHT = 1080;
const HEIGHT_PADDING = 5;

function isLargerFullHd(height: number) {
    return height > FULL_HD_HEIGHT + HEIGHT_PADDING;
}

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

    const screensLargerThan2K = screens.some(screen => {
        return isLargerFullHd(Math.min(screen.width, screen.height) * screen.devicePixelRatio);
    });

    const isVp9 = isVp9Supported().any;
    const isHevc = isHevcMainSupported().any;
    const isAv1 = isAV1Supported().any;
    const mainAnswer = screensLargerThan2K && Boolean(isVp9 || isHevc || isAv1);
    const head = html`${i18n('Can I watch 4K video?')} <${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>${i18n('Is the screen larger than 2K?')} <${Result} value="${screensLargerThan2K}"><//></li>
                <li>
                    ${i18n('Support one of the video codecs?')} <${Result} value=${true}><//>
                    <ul>
                        <li>
                            <${Codec}
                                name="VP9"
                                color="green"
                                disabled="${!isVp9}">
                                <//> <${Result} value="${isVp9}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="H.265"
                                color="orange"
                                disabled="${!isHevc}">
                                <//> <${Result} value="${isHevc}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="AV1"
                                color="yellow"
                                disabled="${!isAv1}">
                                <//> <${Result} value="${isAv1}"><//>
                        </li>
                    </ul>
                </li>
            </ul>
        <//>
    `;
}

