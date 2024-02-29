import { html } from 'htm/preact';
import { isMseSupported, isEmeSupported, isMmsSupported } from 'detect-audio-video';
import { block } from '../../utils/bem';

import './index.css';
import { i18n } from '../../i18n/i18n';

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
    ];

    items.sort((a, b) => {
        if (a.supported === b.supported) {
            return 0;
        }

        if (a.supported) {
            return -1;
        }

        return 1;
    });

    let result = items.map(item => {
        return html`<li title="${item.title}">${item.label}: ${item.supported ? '✓' : i18n('No') }</li>`;
    });

    return html`
        <ul class=${b()}>
            ${result}
        </ul>
    `;
}
