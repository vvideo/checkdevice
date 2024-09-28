import { CLEAR_KEY_SYSTEM, isClearKeySupported } from 'detect-audio-video';
import { getEncryptionSchemes } from '../../../../utils/drm/getEncryptionSchemes';

export class ClearkeyBadgeController {
    hasClearkey = false;
    encryptionSchemes: string[] = [];
    promise: Promise<void> | undefined;

    get() {
        this.promise = this.promise || Promise.all([
            isClearKeySupported(),
            getEncryptionSchemes(CLEAR_KEY_SYSTEM),
        ]).then(data => {
            const [hasClearkey, encryptionSchemes] = data;
            this.hasClearkey = hasClearkey;
            this.encryptionSchemes = encryptionSchemes;

            this.promise = undefined;
        }).catch(e => {
            this.promise = undefined;

            throw e;
        });

        return this.promise;
    }
}
