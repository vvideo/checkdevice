import { html } from 'htm/preact';
import { isDolbyAtmosSupported, isDolbyDigitalPlusSupported, isDolbyDigitalSupported } from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';
import { i18n } from '../../i18n/i18n';

export function QuestionSurroundSound() {
    const isDolbyDigital = isDolbyDigitalSupported().any;
    const isDolbyDigitalPlus = isDolbyDigitalPlusSupported().any;
    const isDolbyAtmos = isDolbyAtmosSupported();
    const mainAnswer = isDolbyDigital || isDolbyDigitalPlus || isDolbyAtmos;
    const head = html`${i18n('Can I listen surround sound on online services?')} <${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            ${i18n('Has support one of the audio codecs?')}\u00a0<${Result} value="${mainAnswer}"><//>
            <ul>
                <li>
                    <${Codec}
                        name="Dolby Digital"
                        color="black"
                        border="white"
                        disabled="${!isDolbyDigital}">
                        <//>\u00a0<${Result} value="${isDolbyDigital}"><//>
                </li>
                <li>
                    <${Codec}
                        name="Dolby Digital Plus"
                        color="black"
                        border="white"
                        disabled="${!isDolbyDigitalPlus}">
                        <//>\u00a0<${Result} value="${isDolbyDigitalPlus}"><//>
                </li>
                <li>
                    <${Codec}
                        name="Dolby Atmos"
                        color="black"
                        border="white"
                        disabled="${!isDolbyAtmos}">
                        <//>\u00a0<${Result} value="${isDolbyAtmos}"><//>
                </li>
            </ul>
        <//>
    `;
}

