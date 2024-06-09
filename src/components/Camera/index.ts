import { html } from 'htm/preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { requestCamera, stopCamera } from './utils';

import './index.css';

const b = block('camera');

export function Camera() {
    const refVideo = useRef<HTMLVideoElement>(null);
    const [size, setSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const [stream, setStream] = useState<MediaStream | null>(null);

    const handleClick = useCallback(() => {
        const video = refVideo.current;

        if (!video) {
            return;
        }

        if (stream) {
            stopCamera(stream, video);
            setSize({ width: 0, height: 0});
            setStream(null);
            video.controls = false;
            return;
        }

        requestCamera(video).then(stream => {
            setStream(stream);
        }).catch(() => {
            // TODO
        });
    }, [stream]);

    useEffect(() => {
        const video = refVideo.current;
        if (!video) {
            return;
        }

        const handleResize = () => {
            setSize({
                width: video.videoWidth,
                height: video.videoHeight,
            });
        };

        video.addEventListener('resize', handleResize);

        return () => {
            video.removeEventListener('resize', handleResize);
        };
    }, []);

    return html`<div class="${b()}">
        <div class="${b('controls')}">
            <button onClick="${handleClick}">${stream ? i18n('Stop') : i18n('Request')}</button>
        </div>
        <div class="${b('container', { played: Boolean(stream)})}">
            ${size.width ? html`<div class="${b('params')}">${size.width}×${size.height}</div>` : ''}
            <video ref="${refVideo}" class="${b('video')}" />
        </div>
    </div>`;
}
