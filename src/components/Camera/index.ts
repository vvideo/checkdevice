import { html } from 'htm/preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { getConstraints, requestCamera, stopCamera } from './utils';
import { Button } from '../Button';
import { getSelectedButton, RadioButtons } from '../RadioButtons';
import { RadioButtonProps } from '../RadioButton';
import { WarningMessage } from '../WarningMessage';
import { CameraInfo } from '../CameraInfo';
import { Checkbox } from '../Checkbox';
import { CameraError } from '../CameraError';
import { getStreamParams } from '../../utils/getStreamParams';

import './index.css';
import { isSsr } from '../../utils/isSsr';

const b = block('camera');

export function Camera() {
    const buttons: RadioButtonProps[] = [
        {
            text: i18n('High resolution'),
            value: '0',
            selected: true,
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

    const refVideo = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [quality, setQuality] = useState(getSelectedButton(buttons).value);
    const [withMic, setWithMic] = useState(false);
    const [error, setError] = useState<Error | null>(null);

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

        requestCamera(video, getConstraints(quality, withMic)!).then(stream => {
            setStream(stream);
            setError(null);
        }).catch(error => {
            setError(error);
            console.log(error);
        });
    }, [stream, quality, withMic]);

    const handleSelect = useCallback((value: string) => {
        const video = refVideo.current;

        setQuality(value);

        if (stream && video) {
            stopCamera(stream, video);
            setStream(null);

            requestCamera(video, getConstraints(value, withMic)!).then(stream => {
                setStream(stream);
                setError(null);
            }).catch(error => {
                setError(error);
                console.log(error);
            });
        }
    }, [quality, stream, withMic]);

    const handleMic = useCallback((checked: boolean) => {
        setWithMic(checked);
    }, []);

    const params = stream ? getStreamParams(stream) : undefined;

    if (isSsr || !navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
        return html`<${WarningMessage}>${i18n('Media Devices API is not supported.')}<//>`;
    }

    const showStop = Boolean(stream);
    const played = Boolean(stream);

    return html`<div class="${b()}">
        <div class="${b('select')}">
            <${Button} class="${b('select-camera')}" theme="${showStop ? 'red' : 'active'}" onClick="${handleClick}">${stream ? i18n('Stop') : i18n('Check camera')}<//>
            <${Checkbox} label="${i18n('Mic')}" checked="${withMic}" onClick="${handleMic}" //>
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
