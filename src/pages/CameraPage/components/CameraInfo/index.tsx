import { h } from 'preact';

import { i18n } from '../../../../i18n';
import { List } from '../../../../components/ui/List';
import { calcAspectRatio } from 'calc-aspect-ratio';
import { MicInfo } from '../../../MicPage/components/MicInfo';
import { block } from '../../../../utils/css/bem';

interface CameraInfoProps {
    video?: {
        groupId?: string;
        deviceId?: string;
        width?: number;
        height?: number;
        label?: string;
        frameRate?: number;
        resizeMode?: string;
    };
    audio?: {
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
    };
}

const b = block('camera-info');

export function CameraInfo(props: CameraInfoProps) {
    const { video, audio } = props;

    const videoParams: [string, string | undefined][] = video ? [
        [i18n('Resolution'), `${video.width}×${video.height}`],
        [
            i18n('Aspect ratio'),
            video.width && video.height ?
                calcAspectRatio(
                    Math.max(video.width, video.height),
                    Math.min(video.width, video.height)
                ).value : undefined
        ],
        [i18n('Frame rate'), `${video.frameRate}`],
        [i18n('Resize mode'), video.resizeMode],
    ] : [];

    return (
        <div class={b('camera-info')}>
            <List title={video?.label} items={videoParams} />
            {audio ? (<MicInfo {...audio} />) : ''}
        </div>
    );
}
