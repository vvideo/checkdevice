import {
    isFairPlaySupported,
    isPlayReadySupported,
    isWidevineSupported,
} from 'detect-audio-video';

let promise: Promise<string[]>;

export function getDrmSystems() {
    if (promise) {
        return promise;
    }

    promise = Promise.all([
        isWidevineSupported(),
        isPlayReadySupported(),
        isFairPlaySupported(),
    ]).then(([isWidevine, isPlayReady, isFairPlay]) => {
        const result: string[] = [];

        if (isWidevine) {
            result.push('widevine');
        }

        if (isPlayReady) {
            result.push('playready');
        }

        if (isFairPlay) {
            result.push('fairplay');
        }

        return result;
    });

    return promise;
}