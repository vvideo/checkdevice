import { html } from 'htm/preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { getStreamParams, requestCamera, stopCamera } from './utils';
import { Button } from '../Button';
import { RadioButtons } from '../RadioButtons';
import { RadioButtonProps } from '../RadioButton';
import { WarningMessage } from '../WarningMessage';
import { CameraInfo } from '../CameraInfo';

import './index.css';

const b = block('camera');

export function Camera() {
    const refVideo = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [quality, setQuality] = useState(1);

    const buttons: RadioButtonProps[] = [
        {
            text: i18n('High resolution'),
            value: '0',
        },
        {
            text: i18n('Low resolution'),
            value: '1',
        },
        {
            text: i18n('High frame rate'),
            value: '2',
        }
    ];    

    const handleClick = useCallback(() => {
        const video = refVideo.current;

        if (!video) {
            return;
        }

        if (stream) {
            stopCamera(stream, video);
            setStream(null);
            video.controls = false;
            return;
        }

        requestCamera(video, getConstraints(quality)).then(stream => {
            setStream(stream);
        }).catch(error => {
            console.log(error);
        });
    }, [stream, quality]);

    const handleSelect = useCallback((value: number) => {
        setQuality(value);

        if (stream && refVideo.current) {
            stopCamera(stream, refVideo.current);
            setStream(null);    
            requestCamera(refVideo.current, getConstraints(quality)).then(stream => {
                setStream(stream);
            }).catch(error => {
                console.log(error);
            });            
        }
    }, [quality, stream]);

    const params = stream ? getStreamParams(stream) : undefined;

    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
        return html`<${WarningMessage}>${i18n('Media Devices API is not supported.')}<//>`;
    }

    const showStop = Boolean(stream);

    return html`<div class="${b()}">
        <div class="${b('select')}">
            <${Button} theme="${showStop ? 'red' : 'active'}" onClick="${handleClick}">${stream ? i18n('Stop') : i18n('Select camera')}<//>
        </div>
        <div class="${b('controls')}">
            <${RadioButtons} onSelect="${handleSelect}" buttons="${buttons}"><//>
        </div>
        <div class="${b('container', { played: Boolean(stream)})}">
            <video ref="${refVideo}" class="${b('video')}" />
        </div>

        <div class="${b('params')}">
            ${params ? html`<${CameraInfo} ...${params} //>` : ''}
        </div>
    </div>`;
}

function getConstraints(value: number): any {
    return {
        0: {
            video: {
                width: {
                    ideal: 0,
                },
            },
            audio: true,
        },
        1: {
            video: {
                width: {
                    ideal: 19200,
                }
            },
            audio: true,
        },
        2: {
            video: {
                frameRate: {
                    ideal: 200,
                }
            },
            audio: true,
        },
    }[value];
}
