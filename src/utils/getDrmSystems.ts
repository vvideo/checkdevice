import { isFairPlaySupported, isPlayReadySupported, isWidevineSupported } from "detect-audio-video";

export function getDrmSystems() {
    const result: string[] = [];

    return Promise.all([
        isWidevineSupported(),
        isPlayReadySupported(),
        isFairPlaySupported(),
        // isPrimetimeSupported(),
    ]).then(([isWidevine, isPlayReady, isFairPlay]) => {

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
}