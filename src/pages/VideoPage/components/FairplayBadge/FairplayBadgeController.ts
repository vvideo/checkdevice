import { FAIRPLAY_KEY_SYSTEM, isFairPlaySupported, isFairPlayV1Supported, isFairPlayV2Supported, isFairPlayV3Supported } from 'detect-audio-video';
import { getEncryptionSchemes } from '../../../../utils/drm/getEncryptionSchemes';

export class FairplayBadgeController {
    hasFairplay = false;
    hasFairplay1 = false;
    hasFairplay2 = false;
    hasFairplay3 = false;
    encryptionSchemes: string[] = [];

    promise: Promise<void> | undefined;

    get() {
        this.promise = this.promise || Promise.all([
            isFairPlaySupported(),
            isFairPlayV1Supported(),
            isFairPlayV2Supported(),
            isFairPlayV3Supported(),
            getEncryptionSchemes(FAIRPLAY_KEY_SYSTEM),
        ]).then(data => {
            const [ resultFairPlay, resultFairPlay1, resultFairPlay2, resultFairPlay3, resultEncryption ] = data;
            this.hasFairplay = resultFairPlay;
            this.hasFairplay1 = resultFairPlay1;
            this.hasFairplay2 = resultFairPlay2;
            this.hasFairplay3 = resultFairPlay3;
            this.encryptionSchemes = resultEncryption;

            this.promise = undefined;
        }).catch(e => {
            this.promise = undefined;

            throw e;
        });

        return this.promise;
    }
}
