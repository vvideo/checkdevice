import { VNode } from 'preact';
import { html } from 'htm/preact';
import {
    isAV1Supported,
    isDolbyVisionSupported,
    isH264BaselineSupported,
    isH264HighSupported,
    isH264MainSupported,
    isHevcMain10Supported,
    isHevcMainSupported,
    isMpeg2TSupported,
    isVp8Supported,
    isVp9Supported,
} from 'detect-audio-video';

import { Codec } from '../Codec';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getTooltip } from '../../utils/getTooltip';

export function VideoCodecs() {
    const supported: VNode[] = [];
    const unsupported: VNode[] = [];

    [
        { supported: isH264BaselineSupported(), name: 'H.264 Baseline', color: 'blue' },
        { supported: isH264MainSupported(), name: 'H.264 Main', color: 'blue' },
        { supported: isH264HighSupported(), name: 'H.264 High', color: 'blue' },
        { supported: isHevcMainSupported(), name: 'H.265 Main', color: 'orange' },
        { supported: isHevcMain10Supported(), name: 'H.265 Main10', color: 'orange' },
        { supported: isVp8Supported(), name: 'VP8', color: 'green' },
        { supported: isVp9Supported(), name: 'VP9', color: 'green' },
        { supported: isDolbyVisionSupported(), name: html`<b>Dolby</b> Vision`, color: 'black', border: 'white' },
        { supported: isAV1Supported(), name: 'AV1', color: 'yellow' },
        { supported: isMpeg2TSupported(), name: 'MPEG2-TS', color: 'yellow' },
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
