import { html } from 'htm/preact';
import { isNativeHlsSupported, isNativeMpdSupported, isNativeMssSupported } from 'detect-audio-video';
import { block } from '../../utils/bem';

import './index.css';

const b = block('native-streaming');

export function NativeStreaming() {
    const items = [
        {
            label: 'MPEG-DASH',
            supported: isNativeMpdSupported(),
        },
        {
            label: 'HTTP Live Streaming',
            supported: isNativeHlsSupported(),
        },
        {
            label: 'Smooth Streaming',
            supported: isNativeMssSupported(),
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
        return html`<li>${item.label}: ${item.supported ? '✓' : 'No' }</li>`;
    });

    return html`
        <ul class=${b()}>
            ${result}
        </ul>
    `;
}
