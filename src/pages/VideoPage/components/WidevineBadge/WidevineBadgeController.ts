import { isWidevineL1Supported, isWidevineL3Supported, isWidevineSupported, WIDEWINE_KEY_SYSTEM } from "detect-audio-video";
import { getEncryptionSchemes } from "../../../../utils/drm/getEncryptionSchemes";
import { getHdcpNotDetected, getHdcpVersion } from "../../../../utils/drm/getHcpVersion";
import { getCachedCheckAllHdcpVersions } from "../../../../utils/drm/getCachedCheckAllHdcpVersions";

export class WidevineBadgeController {
    hasWidevine = false;
    hasL1 = false;
    hasL3 = false;
    hdcpVersion = '';
    encryptionSchemes: string[] = [];

    promise: Promise<void> | undefined;

    get() {
        this.promise = this.promise || Promise.all([
            isWidevineSupported(),
            isWidevineL1Supported(),
            isWidevineL3Supported(),
            getEncryptionSchemes(WIDEWINE_KEY_SYSTEM),
            getCachedCheckAllHdcpVersions(WIDEWINE_KEY_SYSTEM).then(data => {
                this.hdcpVersion = getHdcpVersion(data);
            }).catch(() => {
                this.hdcpVersion = getHdcpNotDetected();
            })
        ]).then(data => {
            const [result, resultL1, resultL3, resultEncryption] = data;
            this.hasWidevine = result;
            this.hasL1 = resultL1;
            this.hasL3 = resultL3;
            this.encryptionSchemes = resultEncryption;

            this.promise = undefined;
        }).catch(e => {
            this.promise = undefined;
            throw e;
        });

        return this.promise;
    }
}
