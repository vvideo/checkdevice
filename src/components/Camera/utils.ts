export function stopCamera(stream: MediaStream, video: HTMLVideoElement) {
    stream.getTracks().forEach((track => {
        track.stop();
    }));

    video.pause();
    video.removeAttribute('src');
    video.srcObject = null;
}

// @ts-ignore
const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

export function requestCamera(video: HTMLVideoElement) {
    return new Promise<MediaStream>((resolve, reject) => {
        getUserMedia.call(navigator, {
            video: {
                width: { ideal: 4096 },
                height: { ideal: 2160 },
            },
            audio: true,
        // @ts-ignore
        }, mediaStream => {
            // Firefox
            if (!('readyState' in mediaStream)) {
                mediaStream.readyState = 'live';
            }

            const stream = new MediaStream(mediaStream);

            if (window.HTMLMediaElement) {
                // Safari 11 doesn't allow use of createObjectURL for MediaStream
                video.srcObject = stream;
            } else {
                // @ts-ignore
                video.src = URL.createObjectURL(stream);
            }

            // Required by Safari on iOS 11. See https://webkit.org/blog/6784
            video.setAttribute('playsinline', '');
            video.muted = true;
            video.controls = true;
            video.play();

            resolve(mediaStream);
        }, (error: Error) => {
            reject(error);
        });
    });
}
