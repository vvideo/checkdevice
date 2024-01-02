import {
    isAacSupported,
    isDolbyAtmosSupported,
    isDolbyDigitalPlusSupported,
    isDolbyDigitalSupported,
    isFlacSupported,
    isMpegHAudioSupported,
    isOpusSupported,
    isVorbisSupported,
    isDtsSupported,
    isDtsHdSupported,
    isDtsXSupported,
    isMp3Supported,
    isMp4AudioSupported,
} from 'detect-audio-video';

import { Codec } from '../Codec';
import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { Row } from '../Row';
import { VNode } from 'preact';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getTooltip } from '../../utils/getTooltip';

const b = block('audio-codecs');

export function AudioCodecs() {
    const supported: VNode[] = [];
    const unsupported: VNode[] = [];

    [
        { supported: isMp3Supported(), name: 'MP3', color: 'orange' },
        { supported: isMp4AudioSupported(), name: 'MP4', color: 'orange' },
        { supported: isAacSupported(), name: 'AAC', color: 'orange' },
        { supported: isFlacSupported(), name: 'FLAC', color: 'blue' },
        { supported: isVorbisSupported(), name: 'Vorbis', color: 'orange' },
        { supported: isOpusSupported(), name: 'Opus', color: 'green' },
        { supported: isDolbyDigitalSupported(), name: html`<b>Dolby</b> Digital`, color: 'black', border: 'white' },
        { supported: isDolbyDigitalPlusSupported(), name: html`<b>Dolby</b> Digital Plus`, color: 'black', border: 'white' },
        { supported: isDolbyAtmosSupported(), name: html`<b>Dolby</b> Atmos`, color: 'black', border: 'white' },
        { supported: isDtsSupported(), name: 'DTS', color: 'black' },
        { supported: isDtsHdSupported(), name: 'DTS:HD', color: 'black' },
        { supported: isDtsXSupported(), name: 'DTS:X', color: 'black' },
        { supported: isMpegHAudioSupported(), name: 'MPEG-H Audio', color: 'blue' },
    ].map(item => {
        const tooltip = getTooltip(item.supported);
        if (item.supported.any) {
            supported.push(Codec({
                name: item.name,
                color: item.color,
                border: item.border,
                tooltip,
            }));
        } else {
            unsupported.push(Codec({
                name: item.name,
                color: 'black',
                disabled: true,
                tooltip,
            }));
        }
    });

    return html`
        <${Row} name="Audio Codecs">
            <${Columns}>
                <${Column} name="Supported">
                    <div class="${b()}">
                        ${supported}
                    </div>
                <//>
                <${Column} name="Unsupported">
                    <div class="${b()}">
                        ${unsupported}
                    </div>
                <//>
            <//>
        <//>
    `;
}
