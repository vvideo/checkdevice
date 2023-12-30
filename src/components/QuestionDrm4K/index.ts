import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { AV1_CONTENT_TYPE, HEV_MAIN_CONTENT_TYPE, VP9_CONTENT_TYPE, isWidevineSupported } from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';

export function QuestionDrm4K() {
    const [isVp9, setIsVp9] = useState(false);
    const [isHevc, setIsHevc] = useState(false);
    const [isAv1, setIsAv1] = useState(false);

    isWidevineSupported(VP9_CONTENT_TYPE).then(result => {
        setIsVp9(result);
    });

    isWidevineSupported(HEV_MAIN_CONTENT_TYPE).then(result => {
        setIsHevc(result);
    });

    isWidevineSupported(AV1_CONTENT_TYPE).then(result => {
        setIsAv1(result);
    });

    const anyCodec = Boolean(isVp9 || isHevc || isAv1);

    const head = html`Can I watch 4K video on online services? <${Result} value="${anyCodec}"><//>`;

    return html`  
        <${ActiveQuestion} head="${head}">
            Online services protect content using <a target="_blank" href="https://en.wikipedia.org/wiki/Digital_rights_management">DRM</a>.
            <ul>
                <li>
                Support one of the video codecs? <${Result} value=${anyCodec}><//>
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
