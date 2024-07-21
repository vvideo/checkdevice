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
