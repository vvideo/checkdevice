import { h } from 'preact';
import {
    isAacSupported,
    isDolbyAtmosSupported,
    isDolbyDigitalPlusSupported,
    isDolbyDigitalSupported,
    isFlacSupported,
    isAlacSupported,
    isMpegHAudioSupported,
    isOpusSupported,
    isVorbisSupported,
    isDtsSupported,
    isDtsHdSupported,
    isDtsXSupported,
    isMp3Supported,
    isMp4AudioSupported,
} from 'detect-audio-video';

import { Codec } from '../../../../components/Codec';
import { Column } from '../../../../components/Column';
import { Columns } from '../../../../components/Columns';
import { i18n } from '../../../../i18n';
import { CodecDetails } from '../../../../components/CodecDetails';

export function AudioCodecs() {
    const supported: h.JSX.Element[] = [];
    const unsupported: h.JSX.Element[] = [];

    [
        { supported: isMp3Supported(), name: 'MP3', color: 'orange' },
        { supported: isMp4AudioSupported(), name: 'MP4', color: 'orange' },
        { supported: isAacSupported(), name: 'AAC', color: 'orange' },
        { supported: isFlacSupported(), name: 'FLAC', color: 'blue' },
        { supported: isAlacSupported(), name: 'ALAC', color: 'blue' },
        { supported: isVorbisSupported(), name: 'Vorbis', color: 'green' },
        { supported: isOpusSupported(), name: 'Opus', color: 'green' },
        { supported: isDolbyDigitalSupported(), name: (<span><b>Dolby</b> Digital</span>), color: 'black', border: 'white' },
        { supported: isDolbyDigitalPlusSupported(), name: (<span><b>Dolby</b> Digital Plus</span>), color: 'black', border: 'white' },
        { supported: isDolbyAtmosSupported(), name: (<span><b>Dolby</b> Atmos</span>), color: 'black', border: 'white' },
        { supported: isDtsSupported(), name: 'DTS', color: 'black' },
        { supported: isDtsHdSupported(), name: 'DTS:HD', color: 'black' },
        { supported: isDtsXSupported(), name: 'DTS:X', color: 'black' },
        { supported: isMpegHAudioSupported(), name: 'MPEG-H Audio', color: 'blue' },
    ].map(item => {
        const isSupported = typeof item.supported === 'boolean' ? item.supported : item.supported.any;
        if (isSupported) {
            supported.push(Codec({
                name: item.name,
                color: item.color,
                border: item.border,
                tooltip: CodecDetails(item.supported),
            }));
        } else {
            unsupported.push(Codec({
                name: item.name,
                color: 'black',
                disabled: true,
                tooltip: CodecDetails(item.supported),
            }));
        }
    });

    return (<Columns>
            <Column title={i18n('Supported audio codecs')} name={i18n('Supported')}>
                {supported.length ? supported : i18n('No supported audio codecs.')}
            </Column>
            {unsupported.length ? (<Column disabled title={i18n('Unsupported audio codecs')} name={i18n('Unsupported')}>{unsupported}</Column>) : null}
    </Columns>);
}
