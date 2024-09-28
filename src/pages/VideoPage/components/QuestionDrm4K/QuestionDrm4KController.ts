import { AV1_CONTENT_TYPE, HEV_MAIN_CONTENT_TYPE, isAV1Supported, isFairPlaySupported, isHevcMainSupported, isPlayReadySL3000Supported, isPlayReadySupported, isVp9Supported, isWidevineL1Supported, isWidevineSupported, PLAYREADY_RECOMMENDATION_KEY_SYSTEM, VP9_CONTENT_TYPE, WIDEWINE_KEY_SYSTEM } from 'detect-audio-video';
import { getCachedCheckAllHdcpVersions } from '../../../../utils/drm/getCachedCheckAllHdcpVersions';
import { isUhdHdcpSupported } from 'hdcp';
import { noop } from '../../../../utils/function/noop';

export class QuestionDrm4KController {
    hasWidevineNeededHdcp: null | boolean = null;
    hasPlayReadyNeededHdcp: null | boolean = null;

    isWidevine = false;
    isWidevineL1Vp9 = false;
    isWidevineL1Hevc = false;
    isWidevineL1Av1 = false;

    isPlayReady = false;
    isPlayReadySL3000Vp9 = false;
    isPlayReadySL3000Hevc = false;
    isPlayReadySL3000Av1 = false;

    isFairplay = false;
    isFairplayVp9 = false;
    isFairplayHevc = false;
    isFairplayAv1 = false;

    promise: Promise<void> | undefined;

    get() {
        this.promise = this.promise || Promise.all([
            isWidevineSupported(),
            isWidevineL1Supported({
                videoCapabilities: [{ contentType: VP9_CONTENT_TYPE }]
            }),
            isWidevineL1Supported({
                videoCapabilities: [{ contentType: HEV_MAIN_CONTENT_TYPE }]
            }),
            isWidevineL1Supported({
                videoCapabilities: [{ contentType: AV1_CONTENT_TYPE }]
            }),
            isPlayReadySupported(),
            isPlayReadySL3000Supported({
                videoCapabilities: [{ contentType: VP9_CONTENT_TYPE }]
            }),
            isPlayReadySL3000Supported({
                videoCapabilities: [{ contentType: HEV_MAIN_CONTENT_TYPE }]
            }),
            isPlayReadySL3000Supported({
                videoCapabilities: [{ contentType: AV1_CONTENT_TYPE }]
            }),
            isFairPlaySupported(),
            getCachedCheckAllHdcpVersions(WIDEWINE_KEY_SYSTEM).then((data) => {
                const result = isUhdHdcpSupported(data);
                this.hasWidevineNeededHdcp = result;
            }).catch(noop),
            getCachedCheckAllHdcpVersions(PLAYREADY_RECOMMENDATION_KEY_SYSTEM).then((data) => {
                const result = isUhdHdcpSupported(data);
                this.hasPlayReadyNeededHdcp = result;
            }).catch(noop),
        ]).then(data => {
            const [
                resultWidevine, resultWidevineL1VP9, resultWidevineL1HEV, resultWidevineL1AV1,
                resultPlayReady, resultPlayReadyVP9, resultPlayReadyHEV, resultPlayReadyAV1,
                resultFairplay,
            ] = data;

            this.isWidevine = resultWidevine;
            this.isWidevineL1Vp9 = resultWidevineL1VP9;
            this.isWidevineL1Hevc = resultWidevineL1HEV;
            this.isWidevineL1Av1 = resultWidevineL1AV1;

            this.isPlayReady = resultPlayReady;
            this.isPlayReadySL3000Vp9 = resultPlayReadyVP9;
            this.isPlayReadySL3000Hevc = resultPlayReadyHEV;
            this.isPlayReadySL3000Av1 = resultPlayReadyAV1;

            this.isFairplay = resultFairplay;
            this.isFairplayVp9 = resultFairplay && isVp9Supported().any;
            this.isFairplayHevc = resultFairplay && isHevcMainSupported().any;
            this.isFairplayAv1 = resultFairplay && isAV1Supported().any;

            this.promise = undefined;
        }).catch(e => {
            this.promise = undefined;

            throw e;
        });

        return this.promise;
    }
}
