import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { isSsr } from '../../utils/isSsr';
import { block } from '../../utils/css/bem';

import './index.css';

interface CodecDetailsProps {
    canPlayType: string;
    isTypeSupported: boolean;
    contentType: string;
    mediaElementType: string;
}

function getIsTypeSupportedProps(isTypeSupported: boolean) {
    return !isSsr && window.MediaSource ? {
        value: String(isTypeSupported),
        color: isTypeSupported ? 'green' : 'red',
    } : {
        value: html`<span style="font-weight:bold">${i18n('unsupported')}</span>`,
        color: 'red',
    };
}

function getCanPlayTypeProps(canPlayType: string) {
    let color: string;

    switch(canPlayType) {
        case 'maybe':
            color = 'orange';
        break;
        case 'probably':
            color = 'green';
        break;
        default:
            color = 'red';
        break;
    }

    return {
        color,
        value: `"${String(canPlayType)}"`,
    };
}

// function getCodecType(mediaElementType: string) {
//     if (mediaElementType === 'audio') {
//         return i18n('Audio codec');
//     }

//     if (mediaElementType === 'video') {
//         return i18n('Video codec');
//     }

//     return i18n('Codec');
// }

const b = block('codec-details');

export function CodecDetails(props: CodecDetailsProps | boolean) {
    if (typeof props === 'boolean') {
        return '';
    }

    const canPlayTypeResult = getCanPlayTypeProps(props.canPlayType);
    const isTypeSupportedResult = getIsTypeSupportedProps(props.isTypeSupported);

    return html`
<div class="${b()}">
    <div class="${b('mimetype')}">${i18n('MIME type')}: <code>${props.contentType}</code></div>
    <div class="${b('types')}">${i18n('Types of testing')}:</div>
    <ul class="${b('list')}">
        <li class="${b('item')}"><code>${[props.mediaElementType]}.canPlayType(): <span style="color:${canPlayTypeResult.color}">${canPlayTypeResult.value}</span></code></li>
        <li class="${b('item')}"><code>MediaSource.isTypeSupported(): <span style="color:${isTypeSupportedResult.color}">${isTypeSupportedResult.value}</span></code></li>
    </ul>
</div>
`;
}
