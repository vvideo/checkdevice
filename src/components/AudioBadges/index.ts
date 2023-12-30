import { html } from 'htm/preact';
import { Badge } from '../Badge';
import {
    isAacSupported,
    isDolbyAtmosSupported,
    isDolbyDigitalPlusSupported,
    isDolbyDigitalSupported,
} from 'detect-audio-video';
import { block } from '../../utils/bem';

const b = block('audio-badges');

export function AudioBadges() {
    const audioCodecs20 = [];
    const audioCodecs51 = [];
    if (isAacSupported().any) {
        audioCodecs20.push('AAC');
    }

    if (isDolbyDigitalSupported().any) {
        audioCodecs51.push('AC-3');
    }

    if (isDolbyDigitalPlusSupported().any) {
        audioCodecs51.push('EC-3');
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

            ${
                isDolbyAtmosSupported().any && Badge({
                    text: html`<b>Dolby</b> Atmos`,
                    background: 'transparent',
                })
            }
        </div>
    `;
}
