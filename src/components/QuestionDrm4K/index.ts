import { useEffect, useState } from 'preact/hooks';
import { html } from 'htm/preact';
import {
    AV1_CONTENT_TYPE,
    HEV_MAIN_CONTENT_TYPE,
    VP9_CONTENT_TYPE,
    isWidevineSupported
} from 'detect-audio-video';
import { ActiveQuestion } from '../ActiveQuestion';
import { Result } from '../Result';
import { Codec } from '../Codec';
import { getDrmSystems } from '../../utils/getDrmSystems';
import { i18n } from '../../i18n/i18n';

export function QuestionDrm4K() {
    const [isVp9, setIsVp9] = useState(false);
    const [isHevc, setIsHevc] = useState(false);
    const [isAv1, setIsAv1] = useState(false);
    const [drmSystems, setDrmSystems] = useState<string[]>([]);

    useEffect(() => {
        isWidevineSupported(VP9_CONTENT_TYPE).then(result => {
            setIsVp9(result);
        });

        isWidevineSupported(HEV_MAIN_CONTENT_TYPE).then(result => {
            setIsHevc(result);
        });

        isWidevineSupported(AV1_CONTENT_TYPE).then(result => {
            setIsAv1(result);
        });

        getDrmSystems().then(result => {
            setDrmSystems(result);
        });
    }, [drmSystems, isVp9, isHevc, isAv1]);

    const anyCodec = Boolean(isVp9 || isHevc || isAv1);

    const hasDrm = Boolean(drmSystems.length);
    const answer = anyCodec && hasDrm;

    const head = html`${i18n('Can I watch 4K video on online services?')} <${Result} value="${answer}"><//>`;

    return html`
        <${ActiveQuestion} head="${head}">
            ${i18n('Online services protect content using')}
            ${'\u00a0'}<a target="_blank" href="${i18n('link:wiki:drm')}">DRM</a>.
            <ul>
                <li>
                    ${i18n('Has DRM support?')} <${Result} value=${hasDrm}><//>
                </li>
                <li>
                ${i18n('Support one of the video codecs?')} <${Result} value=${anyCodec}><//>
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
