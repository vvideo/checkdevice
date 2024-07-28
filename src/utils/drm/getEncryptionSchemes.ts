import { CLEAR_KEY_SYSTEM, encryptionSchemes, isClearKeySupported, isPlayReadySupported, isWidevineSupported, PLAYREADY_RECOMMENDATION_KEY_SYSTEM, WIDEWINE_KEY_SYSTEM } from 'detect-audio-video';

export function getEncryptionSchemes(keySystem: string): Promise<string[]> {
    const schemes: string[] = encryptionSchemes.filter(item => typeof item === 'string');

    let promises: Promise<boolean>[] = [];

    if (keySystem === WIDEWINE_KEY_SYSTEM) {
        promises = schemes.map(encryptionScheme => {
            return isWidevineSupported({ encryptionScheme });
        });
    } else if (keySystem === CLEAR_KEY_SYSTEM) {
        promises = schemes.map(encryptionScheme => {
            return isClearKeySupported({ encryptionScheme });
        });
    } else if (keySystem === PLAYREADY_RECOMMENDATION_KEY_SYSTEM) {
        promises = schemes.map(encryptionScheme => {
            return isPlayReadySupported({ encryptionScheme });
        });
    }

    return Promise.all(promises).then(data => {
        return data.map((item, i) => item ? schemes[i] : '').filter(Boolean);
    });
}
