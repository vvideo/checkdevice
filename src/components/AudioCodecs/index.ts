import {
    DOLBY_AC3_CONTENT_TYPE,
    AAC_CONTENT_TYPE,
    DOLBY_ATMOS_CONTENT_TYPE,
    DOLBY_EC3_CONTENT_TYPE,
    FLAC_CONTENT_TYPE,
    MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE,
    OPUS_CONTENT_TYPE,
    VORBIS_CONTENT_TYPE,
    DTS_CORE_CONTENT_TYPE,
    DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE,
    DTS_UHD_PROFILE_2_CONTENT_TYPE,
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
    MP3_CONTENT_TYPE,
    isMp4AudioSupported,
    MP4_AUDIO_CONTENT_TYPE,
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
        { supported: isMp3Supported(), name: 'MP3', color: 'orange', contentType: MP3_CONTENT_TYPE },
        { supported: isMp4AudioSupported(), name: 'MP4', color: 'orange', contentType: MP4_AUDIO_CONTENT_TYPE },
        { supported: isAacSupported(), name: 'AAC', color: 'orange', contentType: AAC_CONTENT_TYPE },
        { supported: isFlacSupported(), name: 'FLAC', color: 'blue', contentType: FLAC_CONTENT_TYPE },
        { supported: isVorbisSupported(), name: 'Vorbis', color: 'orange', contentType: VORBIS_CONTENT_TYPE },
        { supported: isOpusSupported(), name: 'Opus', color: 'green', contentType: OPUS_CONTENT_TYPE },
        { supported: isDolbyDigitalSupported(), name: 'Dolby Digital', color: 'black', contentType: DOLBY_AC3_CONTENT_TYPE },
        { supported: isDolbyDigitalPlusSupported(), name: 'Dolby Digital Plus', color: 'black', contentType: DOLBY_EC3_CONTENT_TYPE },
        { supported: isDolbyAtmosSupported(), name: 'Dolby Atmos', color: 'black', contentType: DOLBY_ATMOS_CONTENT_TYPE},
        { supported: isDtsSupported(), name: 'DTS', color: 'black', contentType: DTS_CORE_CONTENT_TYPE },
        { supported: isDtsHdSupported(), name: 'DTS:HD', color: 'black', contentType: DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE },
        { supported: isDtsXSupported(), name: 'DTS:X', color: 'black', contentType: DTS_UHD_PROFILE_2_CONTENT_TYPE},
        { supported: isMpegHAudioSupported(), name: 'MPEG-H Audio', color: 'blue', contentType: MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE },
    ].map(item => {
        const tooltip = getTooltip(item.supported, item.contentType);
        if (item.supported.any) {
            supported.push(Codec({
                name: item.name,
                color: item.color,
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
