import { html } from 'htm/preact';
import { Result } from '../Result';
import { ActiveQuestion } from '../ActiveQuestion';
import { isAV1Supported, isHevcMainSupported, isVp9Supported } from 'detect-audio-video';
import { Codec } from '../Codec';

export function Question4K() {
    const isScreen4k = true;
    const isVp9 = isVp9Supported().any;
    const isHevc = isHevcMainSupported().any;
    const isAv1 = isAV1Supported().any;
    const mainAnswer = isScreen4k && Boolean(isVp9 || isHevc || isAv1);
    const head = html`Can I watch 4K video? <${Result} value="${mainAnswer}"><//>`;

    return html`  
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>Is the screen larger than 2K? <${Result} value="${isScreen4k}"><//></li>
                <li>
                    Support one of the video codecs? <${Result} value=${true}><//>
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
                                name="HEVC"
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

