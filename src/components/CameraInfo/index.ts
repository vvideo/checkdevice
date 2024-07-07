import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';
import { calcAspectRatio } from 'calc-aspect-ratio';
import { getChecked } from '../../utils/getChecked';

interface CameraInfoProps {
    video: {
        groupId: string;
        deviceId: string;
        width: number;
        height: number;
        label: string;
        frameRate: number;
        resizeMode: string;
    };
    audio?: {
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
    };
}

export function CameraInfo(props: CameraInfoProps) {
    const { video, audio } = props;
    const { width, height } = video;

    const videoParams = [
        [i18n('Resolution'), `${video.width}×${video.height}`],
        [i18n('Aspect ratio'), calcAspectRatio(Math.max(width, height), Math.min(width, height)).value],
        [i18n('Frame rate'), `${video.frameRate}`],
        [i18n('Resize mode'), video.resizeMode],
        ['groupId', video.groupId],
        ['deviceId', video.deviceId],
    ];

    const audioParams = audio ? [
        [i18n('Auto gain control'), getChecked(audio.autoGainControl)],
        [i18n('Channel count'), audio.channelCount],
        [i18n('Echo cancellation'), getChecked(audio.echoCancellation)],
        [i18n('Latency'), audio.latency],
        [i18n('Noise suppression'), getChecked(audio.noiseSuppression)],
        [i18n('Sample rate'), audio.sampleRate ? `${audio.sampleRate} ${i18n('Hz')}` : undefined],
        [i18n('Sample size'), audio.sampleSize],
        ['groupId', audio.groupId],
        ['deviceId', audio.deviceId],
    ] : [];

    return html`
        <${List} title="${video.label}" items="${videoParams}"><//>
        ${audio ? html`<${List} title="${audio.label}" items="${audioParams}"><//>` : ''}
    `;
}
