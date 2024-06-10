import { html } from 'htm/preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { getConstraints, getStreamParams, requestCamera, stopCamera } from './utils';
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
    const [error, setError] = useState<Error | null>(null);

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

        requestCamera(video, getConstraints(quality)!).then(stream => {
            setStream(stream);
            setError(null);
        }).catch(error => {
            setError(error);
            console.log(error);
        });
    }, [stream, quality]);

    const handleSelect = useCallback((value: number) => {
        const video = refVideo.current;

        setQuality(value);

        if (stream && video) {
            stopCamera(stream, video);
            setStream(null);    
            requestCamera(video, getConstraints(quality)!).then(stream => {
                setStream(stream);
                setError(null);
            }).catch(error => {
                setError(error);
                console.log(error);
            });            
        }
    }, [quality, stream]);

    const params = stream ? getStreamParams(stream) : undefined;

    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
        return html`<${WarningMessage}>${i18n('Media Devices API is not supported.')}<//>`;
    }

    const showStop = Boolean(stream);
    const played = Boolean(stream);

    return html`<div class="${b()}">
        <div class="${b('select')}">
            <${Button} theme="${showStop ? 'red' : 'active'}" onClick="${handleClick}">${stream ? i18n('Stop') : i18n('Select camera')}<//>
        </div>
        <div class="${b('controls')}">
            <${RadioButtons} onSelect="${handleSelect}" buttons="${buttons}"><//>
        </div>

        <${CameraError} error="${error}" //>

        <div class="${b('container', { played })}">
            <video ref="${refVideo}" class="${b('video')}" />
        </div>

        <div class="${b('params')}">
            ${params ? html`<${CameraInfo} ...${params} //>` : ''}
        </div>
    </div>`;
}

interface CameraErrorProps {
    error: Error;
}

function CameraError(props: CameraErrorProps) {
    const { error } = props;

    if (!error) {
        return '';
    }
    
    if (error.name === 'NotFoundError') {
        return html`<${WarningMessage}>${i18n('Camera not found.')}<//>`;
    }

    return html`<${WarningMessage}>${error.message}<//>`;
}
