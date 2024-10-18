import { h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import {
    getDefaultVideoElement,
    isRemotePlaybackApiSupported,
} from 'detect-audio-video';

import { block } from '../../../../utils/css/bem';
import { isSsr } from '../../../../utils/isSsr';
import { getChecked } from '../../../../utils/string/getChecked';
import { i18n } from '../../../../i18n';
import { Button } from '../../../../components/ui/Button';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { RemotePlaybackController } from './RemotePlaybackController';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';

import './index.css';

const b = block('remote-playback');

const remotePlaybackController = new RemotePlaybackController();

export function RemotePlayback() {
    const supported = isSsr ? false : isRemotePlaybackApiSupported();
    const [disabled, setDisabled] = useState(!supported);
    const [error, setError] = useState<Error | null>(null);
    const refVideo = useRef<HTMLVideoElement>(null);
    const forceUpdate = useForceUpdate();

    const handleClick = useCallback(() => {
        if (refVideo.current) {
            refVideo.current.play();
        }

        remotePlaybackController.prompt().catch((e) => {
            setError(e);

            if (refVideo.current) {
                refVideo.current.pause();
            }
        });
    }, []);

    useEffect(() => {
        if (!supported) {
            setDisabled(true);
            return;
        }

        if (!refVideo.current) {
            return;
        }

        remotePlaybackController.start(refVideo.current);
        remotePlaybackController.addListener(() => {
            forceUpdate();
        });

        return () => {
            remotePlaybackController.stop();
            remotePlaybackController.clearListeners();
        };
    }, []);

    return (<div class={b()}>
        <div class={b('support')}>
            <div>{i18n('Support')}: {getChecked(supported)}</div>
            {refVideo.current?.remote ? (<div>{i18n('State')}: {isSsr ? '' : getDefaultVideoElement().remote.state}</div>) : null}
        </div>

        <video class={b('video')} controls ref={refVideo} src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" preload="metadata" />
        <div class={b('button')}>
            <Button onClick={handleClick} disabled={disabled}>{i18n('Cast')}</Button>
        </div>
        {error ? <ErrorMessage>{String(error)}</ErrorMessage> : ''}
    </div>);
}
