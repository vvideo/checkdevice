import {
    isFairPlaySupported,
    isPlayReadySupported,
    isWidevineSupported,
} from 'detect-audio-video';

let cachedPromise: Promise<string[]> | undefined;

export function resetCachedPromise() {
    cachedPromise = undefined;    
}

export function getDrmSystems() {
    if (cachedPromise) {
        return cachedPromise;
    }

    cachedPromise = Promise.all([
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

    return cachedPromise;
}