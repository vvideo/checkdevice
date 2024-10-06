import { isPlayReadySL150Supported, isPlayReadySL2000Supported, isPlayReadySL3000Supported, isPlayReadySupported, PLAYREADY_RECOMMENDATION_KEY_SYSTEM } from "detect-audio-video";
import { getEncryptionSchemes } from '../../../../utils/drm/getEncryptionSchemes';
import { getHdcpNotDetected, getHdcpVersion } from '../../../../utils/drm/getHcpVersion';
import { getCachedCheckAllHdcpVersions } from '../../../../utils/drm/getCachedCheckAllHdcpVersions';

export class PlayreadyBadgeController {
    hasPlayready = false;
    hasSL150 = false;
    hasSL2000 = false;
    hasSL3000 = false;
    isPersistentLicenseSupported = false;
    hdcpVersion = '';
    encryptionSchemes: string[] = [];
    promise: Promise<void> | undefined;

    get() {
        this.promise = this.promise || Promise.all([
            isPlayReadySupported(),
            isPlayReadySL150Supported(),
            isPlayReadySL2000Supported(),
            isPlayReadySL3000Supported(),
            getEncryptionSchemes(PLAYREADY_RECOMMENDATION_KEY_SYSTEM),
            isPlayReadySupported({ sessionTypes: ['persistent-license'] }),
            getCachedCheckAllHdcpVersions(PLAYREADY_RECOMMENDATION_KEY_SYSTEM).then(data => {
                this.hdcpVersion = getHdcpVersion(data);
            }).catch(() => {
                this.hdcpVersion = getHdcpNotDetected();
            }),
        ]).then(data => {
            const [resultPlayReady, resultPlayReady150, resultPlayReady2000, resultPlayReady3000, resultEncryption, resultPesistent ] = data;
            this.hasPlayready = resultPlayReady;
            this.hasSL150 = resultPlayReady150;
            this.hasSL2000 = resultPlayReady2000;
            this.hasSL3000 = resultPlayReady3000;
            this.encryptionSchemes = resultEncryption;
            this.isPersistentLicenseSupported = resultPesistent;

            this.promise = undefined;
        }).catch(e => {
            this.promise = undefined;

            throw e;
        });

        return this.promise;
    }
}
