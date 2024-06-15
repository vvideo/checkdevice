import { html } from 'htm/preact';
import { Badge } from '../Badge';
import {
    isAacSupported,
    isDolbyAtmosSupported,
    isDolbyDigitalPlusSupported,
    isDolbyDigitalSupported,
    isDtsHdSupported,
    isDtsSupported,
    isDtsXSupported,
} from 'detect-audio-video';
import { block } from '../../utils/bem';

const b = block('audio-badges');

export function AudioBadge() {
    const audioCodecs20 = [];
    const audioCodecs51 = [];
    if (isAacSupported().any) {
        audioCodecs20.push('AAC');
    }

    if (isDolbyDigitalSupported().any) {
        audioCodecs51.push('Dolby Digital');
    }

    if (isDolbyDigitalPlusSupported().any) {
        audioCodecs51.push('Dolby Digital Plus');
    }

    if (isDolbyAtmosSupported()) {
        audioCodecs51.push('Dolby Atmos');
    }

    if (isDtsSupported().any) {
        audioCodecs51.push('DTS');
    }

    if (isDtsHdSupported().any) {
        audioCodecs51.push('DTS:HD');
    }

    if (isDtsXSupported().any) {
        audioCodecs51.push('DTS:X');
    }

    const has51 = audioCodecs51.length;

    return html`
        <div class="${b()}">
            ${Badge({
                text: has51 ? '5.1' : '2.0',
                background: has51 ? 'gold' : 'transparent',
                bottom: {
                    text: (has51 ? audioCodecs51 : audioCodecs20).join(', '),
                },
            })}
        </div>
    `;
}
