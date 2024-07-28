import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { Badge } from '../Badge';
import {
    WIDEWINE_KEY_SYSTEM,
    isWidevineL1Supported,
    isWidevineL3Supported,
    isWidevineSupported,
} from 'detect-audio-video';
import { HdcpLink } from '../HdcpLink';
import { getHdcpNotDetected, getHdcpVersion } from '../../utils/drm/getHcpVersion';
import { KeySystems } from '../KeySystems';
import { SecurityLevels } from '../SecurityLevels';
import { block } from '../../utils/css/bem';
import { getCachedCheckAllHdcpVersions } from '../../utils/drm/getCachedCheckAllHdcpVersions';
import { i18n } from '../../i18n/i18n';
import { getEncryptionSchemes } from '../../utils/drm/getEncryptionSchemes';

const b = block('widevine-badge');

export function WidevineBadge() {
    const [hasWidevine, setWidevine] = useState(false);
    const [hasL1, setL1] = useState(false);
    const [hasL3, setL3] = useState(false);
    const [hdcpVersion, setHdcpVersion] = useState('');
    const [encryptionSchemes, setEncryptionSchemes] = useState<string>('');

    getCachedCheckAllHdcpVersions(WIDEWINE_KEY_SYSTEM).then(data => {
        setHdcpVersion(getHdcpVersion(data));
    }).catch(() => {
        setHdcpVersion(getHdcpNotDetected());
    });

    Promise.all([
        isWidevineSupported(),
        isWidevineL1Supported(),
        isWidevineL3Supported(),
        getEncryptionSchemes(WIDEWINE_KEY_SYSTEM),
    ]).then(data => {
        const [result, resultL1, resultL3, resultEncryption] = data;
        setWidevine(result);
        setL1(resultL1);
        setL3(resultL3);
        setEncryptionSchemes(resultEncryption.join(', '));
    });

    const levels = [];

    if (hasL1) {
        levels.push('L1');
    }

    if (hasL3) {
        levels.push('L3');
    }

    return hasWidevine ? html`
        <div class="${b()}">
            ${Badge({
                text: 'Widevine',
                background: 'white',
                top: {
                    text: 'Google',
                },
                bottom: {
                    text: html`<div><${SecurityLevels} items="${levels}" //></div>
                        <div><${KeySystems} items="${[WIDEWINE_KEY_SYSTEM]}" //></div>
                        <div>${encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${encryptionSchemes}` : ''}</div>
                        <div><${HdcpLink} version="${hdcpVersion}" //></div>`,
                },
            })}
        </div>
    ` : '';
}
