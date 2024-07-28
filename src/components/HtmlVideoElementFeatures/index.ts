import { html } from 'htm/preact';
import {
    isMseSupported,
    isEmeSupported,
    isMmsSupported,
    isPipSupported,
    isCastToAirPlaySupported,
} from 'detect-audio-video';

import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n/i18n';
import { isDocumentPipSupported } from './utils';
import { getAutoplayPolicy } from '../../utils/getAutoplayPolicy';
import { isSsr } from '../../utils/isSsr';

import './index.css';

const b = block('html-video-element-features');

export function HtmlVideoElementFeatures() {
    const items = [
        {
            label: 'Media Source Extensions',
            title: 'MSE',
            supported: isSsr ? false : isMseSupported(),
        },
        {
            label: 'Managed Media Source',
            title: 'MMS',
            supported: isSsr ? false : isMmsSupported(),
        },
        {
            label: 'Encrypted Media Extensions',
            title: 'EME',
            supported: isSsr ? false : isEmeSupported(),
        },
        {
            label: 'Picture-in-picture',
            title: 'Pip',
            supported: isSsr ? false : isPipSupported(),
        },
        {
            label: 'Document Picture-in-picture',
            title: 'Document Pip',
            supported: isSsr ? false : isDocumentPipSupported(),
        },
        {
            label: 'Cast to AirPlay',
            title: 'AirPlay',
            supported: isSsr ? false : isCastToAirPlaySupported(),
        }
    ];

    items.sort((a, b) => {
        if (a.supported === b.supported) {
            return 0;
        }

        return a.supported ? -1 : 1;
    });


    const content = items.map(item => {
        const supported = item.supported ? '✓' : i18n('No');
        return html`<li title="${item.title}">${item.label}: ${supported}</li>`;
    });

    const autoplayPolicy = isSsr ? '' : getAutoplayPolicy();
    if (autoplayPolicy) {
        content.push(html`<li>Autoplay Policy: ${autoplayPolicy}</li>`);
    }

    return html`<ul class=${b()}>${content}</ul>`;
}
