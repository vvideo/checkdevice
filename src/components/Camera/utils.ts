export function stopCamera(stream: MediaStream, video: HTMLVideoElement) {
    stream.getTracks().forEach((track => {
        track.stop();
    }));

    video.pause();
    video.srcObject = null;
}

export function requestCamera(video: HTMLVideoElement, constraints: MediaStreamConstraints) {
    return navigator.mediaDevices.getUserMedia(constraints).then(mediaStream => {
        video.srcObject = mediaStream;
        video.setAttribute('playsinline', '');
        video.controls = true;
        video.play();

        return mediaStream;
    });
}

export function getStreamParams(stream: MediaStream) {
    const video = stream.getVideoTracks()[0];
    const audio = stream.getAudioTracks()[0];

    const videoSettings = video?.getSettings();
    const audioSettings = audio?.getSettings();

    return {
        video: video && videoSettings ? {
            deviceId: videoSettings.deviceId,
            groupId: videoSettings.groupId,
            label: video.label,
            width: videoSettings.width,
            height: videoSettings.height,
            frameRate: videoSettings.frameRate,
            // @ts-ignore
            resizeMode: videoSettings.resizeMode,
            // @ts-ignore
            backgroundBlur: videoSettings.backgroundBlur,
        } : undefined,
        audio: audio && audioSettings ? {
            deviceId: audioSettings.deviceId,
            groupId: audioSettings.groupId,
            label: audio.label,
            // @ts-ignore
            latency: audioSettings.latency,
            autoGainControl: audioSettings.autoGainControl,
            channelCount: audioSettings.channelCount,
            echoCancellation: audioSettings.echoCancellation,
            noiseSuppression: audioSettings.noiseSuppression,
            sampleRate: audioSettings.sampleRate,
            sampleSize: audioSettings.sampleSize,
        } : undefined,
    };
}

export function getConstraints(value: string, audio: boolean): MediaStreamConstraints | undefined {
    return {
        0: {
            video: {
                width: {
                    ideal: 19200,
                }
            },
            audio,
        },
        1: {
            video: {
                width: {
                    ideal: 0,
                },
            },
            audio,
        },
        2: {
            video: {
                frameRate: {
                    ideal: 200,
                }
            },
            audio,
        },
    }[value];
}
