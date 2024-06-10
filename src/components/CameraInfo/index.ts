import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';

interface CameraInfoProps {
    video: {
        width: number;
        height: number;
        label: string;
        frameRate: number;
    };
    audio: {
        label: string;
    };
}

export function CameraInfo(props: CameraInfoProps) {
    const { video } = props;
    const videoParams = [
        [i18n('Resolution'), `${video.width}×${video.height}`],
        [i18n('Frame rate'), `${video.frameRate}`],
    ];

    return html`
        <${List} title="${video.label}" items="${videoParams}"><//>
    `;
}
