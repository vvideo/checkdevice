import { html } from 'htm/preact';
import { isAV1Supported, isHdrScreenSupported, isHevcMainSupported, isVp9Supported } from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';
import { i18n } from '../../i18n/i18n';

export function QuestionHdr() {
    const isVp9 = isVp9Supported().any;
    const isHevc = isHevcMainSupported().any;
    const isAv1 = isAV1Supported().any;
    const isHdr = isHdrScreenSupported();
    const mainAnswer = isHdr && Boolean(isVp9 || isHevc || isAv1);
    const head = html`${i18n('Can I watch HDR video?')} <${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>${i18n('Is this a HDR screen?')} <${Result} value="${isHdr}"><//></li>
                <li>${i18n('Has support one of the video codecs?')} <${Result} value="${Boolean(isVp9 || isHevc || isAv1)}"><//>
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

