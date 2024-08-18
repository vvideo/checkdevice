import { h } from 'preact';
import { i18n } from '../../../../i18n';
import { List } from '../../../../components/ui/List';
import { getChecked } from '../../../../utils/getChecked';
import { ValueInProgress } from '../../../../components/ValueInProgress';

interface MicInfoProps {
    groupId?: string;
    deviceId?: string;
    label?: string;
    autoGainControl?: boolean;
    channelCount?: number;
    echoCancellation?: boolean;
    latency?: number;
    noiseSuppression?: boolean;
    sampleRate?: number;
    sampleSize?: number;
}

export function MicInfo(props: MicInfoProps) {
    const audioParams: [string, string | number | undefined][] =  [
        [i18n('Auto gain control'), getChecked(props.autoGainControl)],
        [i18n('Channel count'), props.channelCount],
        [i18n('Echo cancellation'), getChecked(props.echoCancellation)],
        [i18n('Latency'), typeof props.latency === 'number' ? `${props.latency} ${i18n('sec.')}` : props.latency],
        [i18n('Noise suppression'), getChecked(props.noiseSuppression)],
        [i18n('Sample rate'), props.sampleRate ? `${props.sampleRate} ${i18n('Hz')}` : undefined],
        [i18n('Sample size'), props.sampleSize],
    ];

    return (<List title={props.label} items={audioParams} />);
}

export function MicInfoSsr() {
    const audioParams: [string, h.JSX.Element][] = [
        [i18n('Auto gain control'), (<ValueInProgress />)],
        [i18n('Channel count'), (<ValueInProgress />)],
        [i18n('Echo cancellation'), (<ValueInProgress />)],
        [i18n('Latency'), (<ValueInProgress />)],
        [i18n('Noise suppression'), (<ValueInProgress />)],
        [i18n('Sample rate'), (<ValueInProgress />)],
        [i18n('Sample size'), (<ValueInProgress />)],
    ];

    return (<List title={i18n('Microphone name')} items={audioParams} />);
}
