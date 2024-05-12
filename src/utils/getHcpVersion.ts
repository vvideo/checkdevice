import { CheckHdcpVersion, getMaxHdcpVersion } from 'hdcp';
import { i18n } from '../i18n/i18n';

export function getHdcpNotDetected() {
    return i18n('HDCP not detected');
}

export function getHdcpVersion(versions: CheckHdcpVersion[]) {
    const maxVersion = getMaxHdcpVersion(versions);
    const lastVersion = versions[versions.length - 1];

    return maxVersion || lastVersion?.status;
}
