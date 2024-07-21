import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';
import { calcAspectRatio } from 'calc-aspect-ratio';
import { MicInfo } from '../MicInfo';

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

    return html`
        <${List} title="${video.label}" items="${videoParams}"><//>
        ${audio ? html`<${MicInfo} ..."${audio}"><//>` : ''}
    `;
}
