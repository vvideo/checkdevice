import { html } from 'htm/preact';
import {
    isVp9Profile2Level110BitSupported,
    isHevcMain10Supported,
    isAV1Main10Supported,
    isHdrScreenSupported,
} from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';
import { i18n } from '../../i18n/i18n';

export function QuestionHdr() {
    const isVp910Bit = isVp9Profile2Level110BitSupported().any;
    const isHevcMain10 = isHevcMain10Supported().any;
    const isAv1Main10 = isAV1Main10Supported().any;
    const isHdr = isHdrScreenSupported();
    const mainAnswer = isHdr && Boolean(isVp910Bit || isHevcMain10 || isAv1Main10);
    const head = html`${i18n('Can I watch HDR video?')} <${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>${i18n('Is this a HDR screen?')} <${Result} value="${isHdr}"><//></li>
                <li>${i18n('Has support one of the video codecs?')} <${Result} value="${Boolean(isVp910Bit || isHevcMain10 || isAv1Main10)}"><//>
                    <ul>
                        <li>
                            <${Codec}
                                name="VP9 Profile 2 Level 1 10 bits"
                                color="green"
                                disabled="${!isVp910Bit}">
                                <//> <${Result} value="${isVp910Bit}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="H.265 Main 10"
                                color="orange"
                                disabled="${!isHevcMain10}">
                                <//> <${Result} value="${isHevcMain10}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="AV1 Main 10"
                                color="yellow"
                                disabled="${!isAv1Main10}">
                                <//> <${Result} value="${isAv1Main10}"><//>
                        </li>
                    </ul>
                </li>
            </ul>
        <//>
    `;
}

