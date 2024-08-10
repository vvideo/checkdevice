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

export function savePhoto(video: HTMLVideoElement, fileName: string) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.drawImage(video, 0, 0);
    }

    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.click();    
}
