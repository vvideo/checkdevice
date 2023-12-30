import { isFairPlaySupported, isPlayReadySupported, isWidevineSupported } from "detect-audio-video";

export function getDrmSystems() {
    const result = {
        widevine: false,
        playready: false,
        fairplay: false,
    };

    Promise.all([
        isWidevineSupported(),
        isPlayReadySupported(),
        isFairPlaySupported(),
        // isPrimetimeSupported(),
    ]).then(([isWidevine, isPlayReady, isFairPlay]) => {
        if (isWidevine) {
            result.widevine = true;
        }

        if (isPlayReady) {
            result.playready = true;
        }

        if (isFairPlay) {
            result.fairplay = true;
        }
    });
}