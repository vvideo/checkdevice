import { h } from 'preact';
import {
    isAV1Supported,
    isDolbyVisionSupported,
    isEvcBaselineSupported,
    isEvcMainSupported,
    isH264BaselineSupported,
    isH264HighSupported,
    isH264MainSupported,
    isHevcMain10Supported,
    isHevcMainSupported,
    isMpeg2TSupported,
    isVp8Supported,
    isVp9Supported,
    isVvcMain10Supported,
} from 'detect-audio-video';

import { Codec } from '../../../../components/Codec';
import { Column } from '../../../../components/Column';
import { Columns } from '../../../../components/Columns';
import { i18n } from '../../../../i18n';
import { CodecDetails } from '../../../../components/CodecDetails';

export function VideoCodecs() {
    const supported: h.JSX.Element[] = [];
    const unsupported: h.JSX.Element[] = [];

    [
        { supported: isH264BaselineSupported(), name: 'H.264 Baseline', color: 'blue' },
        { supported: isH264MainSupported(), name: 'H.264 Main', color: 'blue' },
        { supported: isH264HighSupported(), name: 'H.264 High', color: 'blue' },
        { supported: isHevcMainSupported(), name: 'H.265 Main', color: 'orange' },
        { supported: isHevcMain10Supported(), name: 'H.265 Main10', color: 'orange' },
        { supported: isEvcBaselineSupported(), name: 'EVC Baseline', color: 'blue' },
        { supported: isEvcMainSupported(), name: 'EVC Main', color: 'blue' },
        { supported: isVp8Supported(), name: 'VP8', color: 'green' },
        { supported: isVp9Supported(), name: 'VP9', color: 'green' },
        { supported: isDolbyVisionSupported(), name: (<span><b>Dolby</b> Vision</span>), color: 'black', border: 'white' },
        { supported: isAV1Supported(), name: 'AV1', color: 'yellow' },
        { supported: isVvcMain10Supported(), name: 'H.266 Main10', color: 'blue' },
        { supported: isMpeg2TSupported(), name: 'MPEG2-TS', color: 'yellow' },
    ].map(item => {
        if (item.supported.any) {
            supported.push(Codec({
                name: item.name,
                color: item.color,
                border: item.border,
                tooltip: CodecDetails(item.supported),
            }));
        } else {
            unsupported.push(Codec({
                name: item.name,
                disabled: true,
                tooltip: CodecDetails(item.supported),
            }));
        }
    });

    return (
        <Columns>
            <div>
                {supported.length ? (<Column title={i18n('Supported video codecs')} name={i18n('Supported')}>
                    {supported}
                </Column>) : i18n('No supported video codecs.')}
                {unsupported.length ? (<Column disabled title={i18n('Unsupported video codecs')} name={i18n('Unsupported')}>
                    {unsupported}
                </Column>) : ''}
            </div>
        </Columns>
    );
}
