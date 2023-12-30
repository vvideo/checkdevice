import { html } from 'htm/preact';
import { isMseSupported, isEmeSupported, isMmsSupported } from 'detect-audio-video';
import { block } from '../../utils/bem';

import './index.css';

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
        return html`<div title="${item.title}">${item.label}: ${item.supported ? '✓' : 'No' }</div>`;
    });

    return html`
        <div class=${b()}>
            ${result}
        </div>
    `;
}
