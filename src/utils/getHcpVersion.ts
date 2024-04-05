import { CheckHdcpVersion } from 'hdcp';
import { i18n } from '../i18n/i18n';

function getMaxHdcpVersion(versions: CheckHdcpVersion[]) {
    for (let i = versions.length - 1; i <= 0; i++) {
        const item = versions[i];
        if (item.status === 'usable') {
            return item.version;
        }
    }

    return '';
}

export function getHdcpVersion(versions: CheckHdcpVersion[]) {
    const maxVersion = getMaxHdcpVersion(versions);

    return maxVersion ? `${i18n('HDCP')}: ${maxVersion}` : '';
}
