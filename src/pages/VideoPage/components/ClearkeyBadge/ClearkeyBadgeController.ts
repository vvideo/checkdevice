import { CLEAR_KEY_SYSTEM, isClearKeySupported } from 'detect-audio-video';
import { getEncryptionSchemes } from '../../../../utils/drm/getEncryptionSchemes';

export class ClearkeyBadgeController {
    hasClearkey = false;
    encryptionSchemes: string[] = [];
    isPersistentLicenseSupported = false;
    promise: Promise<void> | undefined;

    get() {
        this.promise = this.promise || Promise.all([
            isClearKeySupported(),
            getEncryptionSchemes(CLEAR_KEY_SYSTEM),
            isClearKeySupported({ sessionTypes: ['persistent-license'] }),
        ]).then(data => {
            const [hasClearkey, encryptionSchemes, isPersistentLicenseSupported ] = data;
            this.hasClearkey = hasClearkey;
            this.encryptionSchemes = encryptionSchemes;
            this.isPersistentLicenseSupported = isPersistentLicenseSupported;

            this.promise = undefined;
        }).catch(e => {
            this.promise = undefined;

            throw e;
        });

        return this.promise;
    }
}
