import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';
import { getChecked } from '../../utils/getChecked';

interface MicInfoProps {
    groupId: string;
    deviceId: string;
    label: string;
    autoGainControl: boolean;
    channelCount: number;
    echoCancellation: boolean;
    latency: number;
    noiseSuppression: boolean;
    sampleRate: number;
    sampleSize: number;
}

export function MicInfo(props: MicInfoProps) {
    const audioParams =  [
        [i18n('Auto gain control'), getChecked(props.autoGainControl)],
        [i18n('Channel count'), props.channelCount],
        [i18n('Echo cancellation'), getChecked(props.echoCancellation)],
        [i18n('Latency'), props.latency],
        [i18n('Noise suppression'), getChecked(props.noiseSuppression)],
        [i18n('Sample rate'), props.sampleRate ? `${props.sampleRate} ${i18n('Hz')}` : undefined],
        [i18n('Sample size'), props.sampleSize],
        ['groupId', props.groupId],
        ['deviceId', props.deviceId],
    ];

    return html`<${List} title="${props.label}" items="${audioParams}"><//>`;
}
