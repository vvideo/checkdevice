import { html } from 'htm/preact';
import { isDolbyAtmosSupported, isDolbyDigitalPlusSupported, isDolbyDigitalSupported, isDtsHdSupported, isDtsSupported, isDtsXSupported } from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';
import { i18n } from '../../i18n/i18n';
import { CodecDetails } from '../CodecDetails';

export function QuestionSurroundSound() {
    const isDolbyDigital = isDolbyDigitalSupported();
    const isDolbyDigitalPlus = isDolbyDigitalPlusSupported();
    const isDolbyAtmos = isDolbyAtmosSupported();
    const isDts = isDtsSupported();
    const isDtsHd = isDtsHdSupported();
    const isDtsX = isDtsXSupported();

    const mainAnswer = isDolbyDigital.any ||
        isDolbyDigitalPlus.any ||
        isDolbyAtmos ||
        isDts.any ||
        isDtsHd.any ||
        isDtsX.any;

    const head = html`${i18n('Can I listen to surround sound on online services?')}\u00a0<${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            ${i18n('Supports one of the audio codecs?')}\u00a0<${Result} value="${mainAnswer}"><//>
            <ul>
                <li>
                    <${Codec}
                        name="Dolby Digital"
                        color="black"
                        border="white"
                        disabled="${!isDolbyDigital.any}"
                        tooltip="${CodecDetails(isDolbyDigital)}">
                        <//>\u00a0<${Result} value="${isDolbyDigital.any}"><//>
                </li>
                <li>
                    <${Codec}
                        name="Dolby Digital Plus"
                        color="black"
                        border="white"
                        disabled="${!isDolbyDigitalPlus.any}"
                        tooltip="${CodecDetails(isDolbyDigitalPlus)}">
                        <//>\u00a0<${Result} value="${isDolbyDigitalPlus.any}"><//>
                </li>
                <li>
                    <${Codec}
                        name="Dolby Atmos"
                        color="black"
                        border="white"
                        disabled="${!isDolbyAtmos}">
                        <//>\u00a0<${Result} value="${isDolbyAtmos}"><//>
                </li>
                <li>
                    <${Codec}
                        name="DTS"
                        color="black"
                        border="white"
                        disabled="${!isDts.any}"
                        tooltip="${CodecDetails(isDts)}">
                        <//>\u00a0<${Result} value="${isDts.any}"><//>
                </li>
                <li>
                    <${Codec}
                        name="DTS:HD"
                        color="black"
                        border="white"
                        disabled="${!isDtsHd.any}"
                        tooltip="${CodecDetails(isDtsHd)}">
                        <//>\u00a0<${Result} value="${isDtsHd.any}"><//>
                </li>
                <li>
                    <${Codec}
                        name="DTS:X"
                        color="black"
                        border="white"
                        disabled="${!isDtsX.any}"
                        tooltip="${CodecDetails(isDtsX)}">
                        <//>\u00a0<${Result} value="${isDtsX.any}"><//>
                </li>
            </ul>
        <//>
    `;
}

