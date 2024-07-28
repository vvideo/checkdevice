import { html } from 'htm/preact';
import {
    isVp9Profile2Level110BitSupported,
    isHevcMain10Supported,
    isAV1Main10Supported,
    isHighDynamicRangeSupported,
    isHighVideoDynamicRangeSupported,
} from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';
import { i18n } from '../../i18n';
import { CodecDetails } from '../CodecDetails';
import { InfoLink } from '../InfoLink';
import { isSsr } from '../../utils/isSsr';

export function QuestionHdr() {
    const isVp910Bit = isVp9Profile2Level110BitSupported();
    const isHevcMain10 = isHevcMain10Supported();
    const isAv1Main10 = isAV1Main10Supported();
    const isHdr = !isSsr && isHighDynamicRangeSupported();
    const isVideoHdr = !isSsr && isHighVideoDynamicRangeSupported();
    const mainAnswer = Boolean(isHdr || isVideoHdr) && Boolean(isVp910Bit.any || isHevcMain10.any || isAv1Main10.any);
    const head = html`${i18n('Can I watch HDR video?')} <${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li><${QuestionHdrHead} isHdr="${isHdr}" isVideoHdr="${isVideoHdr}" //></li>
                <li>${i18n('Supports one of the video codecs?')}\u00a0<${Result} value="${Boolean(isVp910Bit || isHevcMain10 || isAv1Main10)}"><//>
                    <ul>
                        <li>
                            <${Codec}
                                name="VP9 Profile 2 Level 1 10 bits"
                                color="green"
                                disabled="${!isVp910Bit.any}"
                                tooltip="${CodecDetails(isVp910Bit)}">
                                <//>\u00a0<${Result} value="${isVp910Bit.any}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="H.265 Main 10"
                                color="orange"
                                disabled="${!isHevcMain10.any}"
                                tooltip="${CodecDetails(isHevcMain10)}">
                                <//>\u00a0<${Result} value="${isHevcMain10.any}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="AV1 Main 10"
                                color="yellow"
                                disabled="${!isAv1Main10.any}"
                                tooltip="${CodecDetails(isAv1Main10)}">
                                <//>\u00a0<${Result} value="${isAv1Main10.any}"><//>
                        </li>
                    </ul>
                </li>
            </ul>
        <//>
    `;
}

interface QuestionHdrHeadProps {
    isHdr: boolean;
    isVideoHdr: boolean;
}

export function QuestionHdrHead(props: QuestionHdrHeadProps) {
    const isHdr = Boolean(props.isHdr);
    const isVideoHdr = Boolean(props.isVideoHdr);
    // For Firefox on MacOS
    if (!isHdr && isVideoHdr) {
        return html`${i18n('Has HDR support for video?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range" //>\u00a0<${Result} value="${isVideoHdr}"><//>`;
    }

    return html`${i18n('Is this an HDR-compatible screen?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range" //>\u00a0<${Result} value="${isHdr}"><//>`;
}
