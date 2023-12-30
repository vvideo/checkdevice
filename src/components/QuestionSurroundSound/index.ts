import { html } from 'htm/preact';
import { isDolbyAtmosSupported, isDolbyDigitalPlusSupported, isDolbyDigitalSupported } from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';

export function QuestionSurroundSound() {
    const isDolbyDigital = isDolbyDigitalSupported().any;
    const isDolbyDigitalPlus = isDolbyDigitalPlusSupported().any;
    const isDolbyAtmos = isDolbyAtmosSupported().any;
    const mainAnswer = isDolbyDigital || isDolbyDigitalPlus || isDolbyAtmos;
    const head = html`Can I listen surround sound? <${Result} value="${mainAnswer}"><//>`;

    return html`  
        <${ActiveQuestion} head="${head}">
            <ul>
                <li>Support one of the audio codecs? <${Result} value="${mainAnswer}"><//>
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

