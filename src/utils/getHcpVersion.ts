import { CheckHdcpVersion } from 'hdcp';
import { i18n } from '../i18n/i18n';

export function getMaxHdcpVersion(versions: CheckHdcpVersion[]) {
    for (let i = versions.length - 1; i >= 0; i--) {
        const item = versions[i];
        if (item.status === 'usable') {
            return item.version;
        }
    }

    return '';
}

export const HDCP_VERSION_WITH_4K = 2.2;
export function is4kHdcpSupported(versions: CheckHdcpVersion[]) {
    const maxVersion = getMaxHdcpVersion(versions);

    if (!maxVersion) {
        return false;
    }

    return parseFloat(maxVersion) >= HDCP_VERSION_WITH_4K;
}

export function getHdcpNotDetected() {
    return i18n('Not detected');
}

export function getHdcpVersion(versions: CheckHdcpVersion[]) {
    const maxVersion = getMaxHdcpVersion(versions);
    const lastVersion = versions[versions.length - 1];

    return maxVersion || lastVersion?.status;
}
