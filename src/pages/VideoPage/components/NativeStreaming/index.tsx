import { h } from 'preact';

import { isNativeHlsSupported, isNativeMpdSupported, isNativeMssSupported } from 'detect-audio-video';
import { block } from '../../../../utils/css/bem';
import { getChecked } from '../../../../utils/string/getChecked';

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

    const result = items.map(item => {
        return (<li>{item.label}: {getChecked(item.supported)}</li>);
    });

    return (
        <ul class={b()}>
            {result}
        </ul>
    );
}
