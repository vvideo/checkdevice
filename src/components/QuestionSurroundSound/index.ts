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
    const head = html`${i18n('Can I listen surround sound?')} <${Result} value="${mainAnswer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>${i18n('Support one of the audio codecs?')} <${Result} value="${mainAnswer}"><//>
                    <ul>
                        <li>
                            <${Codec}
                                name="Dolby Digital"
                                color="black"
                                disabled="${!isDolbyDigital}">
                                <//> <${Result} value="${isDolbyDigital}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="Dolby Digital Plus"
                                color="black"
                                disabled="${!isDolbyDigitalPlus}">
                                <//> <${Result} value="${isDolbyDigitalPlus}"><//>
                        </li>
                        <li>
                            <${Codec}
                                name="Dolby Atmos"
                                color="black"
                                disabled="${!isDolbyAtmos}">
                                <//> <${Result} value="${isDolbyAtmos}"><//>
                        </li>
                    </ul>
                </li>
            </ul>
        <//>
    `;
}

