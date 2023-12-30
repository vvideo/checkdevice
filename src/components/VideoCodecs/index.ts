import { VNode } from 'preact';
import { html } from 'htm/preact';
import { AV1_CONTENT_TYPE, DOLBY_VISION_CONTENT_TYPE, H264_BASELINE_CONTENT_TYPE, H264_HIGH_CONTENT_TYPE, H264_MAIN_CONTENT_TYPE, HEVC_MAIN10_CONTENT_TYPE, HEVC_MAIN_CONTENT_TYPE, MPEG2T_CONTENT_TYPE, VP8_CONTENT_TYPE, VP9_CONTENT_TYPE, isAV1Supported, isDolbyVisionSupported, isH264BaselineSupported, isH264HighSupported, isH264MainSupported, isHevcMain10Supported, isHevcMainSupported, isMpeg2TSupported, isVp8Supported, isVp9Supported } from 'detect-audio-video';
import { Codec } from '../Codec';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getTooltip } from '../../utils/getTooltip';

export function VideoCodecs() {
    const supported: VNode[] = [];
    const unsupported: VNode[] = [];

    [
        { supported: isH264BaselineSupported(), name: 'H.264 Baseline', color: 'blue', contentType: H264_BASELINE_CONTENT_TYPE },
        { supported: isH264MainSupported(), name: 'H.264 Main', color: 'blue', contentType: H264_MAIN_CONTENT_TYPE },
        { supported: isH264HighSupported(), name: 'H.264 High', color: 'blue', contentType: H264_HIGH_CONTENT_TYPE },
        { supported: isHevcMainSupported(), name: 'H.265 Main', color: 'orange', contentType: HEVC_MAIN_CONTENT_TYPE },
        { supported: isHevcMain10Supported(), name: 'H.265 Main10', color: 'orange', contentType: HEVC_MAIN10_CONTENT_TYPE },
        { supported: isVp8Supported(), name: 'VP8', color: 'green', contentType: VP8_CONTENT_TYPE },
        { supported: isVp9Supported(), name: 'VP9', color: 'green', contentType: VP9_CONTENT_TYPE },
        { supported: isDolbyVisionSupported(), name: 'Dolby Vision', color: 'black', contentType: DOLBY_VISION_CONTENT_TYPE },
        { supported: isAV1Supported(), name: 'AV1', color: 'yellow', contentType: AV1_CONTENT_TYPE },
        { supported: isMpeg2TSupported(), name: 'MPEG2-TS', color: 'yellow', contentType: MPEG2T_CONTENT_TYPE },
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
                disabled: true,
                tooltip,
            }));
        }
    });

    return html`
        <${Columns} name="Video Codecs">
            ${supported.length ? html`<${Column} name="Supported">
                ${supported}
            <//>` : ''}
            ${unsupported.length ? html`<${Column} name="Unsupported">
                ${unsupported}
            <//>` : ''}
        <//>
`;
}
