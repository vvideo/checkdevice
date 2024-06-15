import { html } from 'htm/preact';
import {
    isMseSupported,
    isEmeSupported,
    isMmsSupported,
    isPipSupported,
    isCastToAirPlaySupported,
} from 'detect-audio-video';

import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';

import './index.css';
import { isDocumentPipSupported } from './utils';

const b = block('html-video-element-features');

export function HtmlVideoElementFeatures() {
    const items = [
        {
            label: 'Media Source Extensions',
            title: 'MSE',
            supported: isMseSupported(),
        },
        {
            label: 'Managed Media Source',
            title: 'MMS',
            supported: isMmsSupported(),
        },
        {
            label: 'Encrypted Media Extensions',
            title: 'EME',
            supported: isEmeSupported(),
        },
        {
            label: 'Picture-in-picture',
            title: 'Pip',
            supported: isPipSupported(),
        },
        {
            label: 'Document Picture-in-picture',
            title: 'Document Pip',
            supported: isDocumentPipSupported(),
        },
        {
            label: 'Cast to AirPlay',
            title: 'AirPlay',
            supported: isCastToAirPlaySupported(),
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

    return html`<ul class=${b()}>${content}</ul>`;
}
