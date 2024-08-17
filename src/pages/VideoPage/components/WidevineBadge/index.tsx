import { h } from 'preact';
import { useState } from 'preact/hooks';
import {
    WIDEWINE_KEY_SYSTEM,
    isWidevineL1Supported,
    isWidevineL3Supported,
    isWidevineSupported,
} from 'detect-audio-video';

import { Badge } from '../../../../components/Badge';
import { HdcpLink } from '../HdcpLink';
import { getHdcpNotDetected, getHdcpVersion } from '../../../../utils/drm/getHcpVersion';
import { KeySystems } from '../KeySystems';
import { SecurityLevels } from '../SecurityLevels';
import { block } from '../../../../utils/css/bem';
import { getCachedCheckAllHdcpVersions } from '../../../../utils/drm/getCachedCheckAllHdcpVersions';
import { i18n } from '../../../../i18n';
import { getEncryptionSchemes } from '../../../../utils/drm/getEncryptionSchemes';

import './index.css';

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

    return hasWidevine ? (
        <div class={b()}>
            <Badge
                text="Widevine"
                background="white"
                top={{ text: 'Google' }}
                bottom={{
                    text: (<ul class={b('list')}>
                        <li class={b('item')}><SecurityLevels items={levels} /></li>
                        <li class={b('item')}><KeySystems items={[WIDEWINE_KEY_SYSTEM]} /></li>
                        <li class={b('item')}>{encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${encryptionSchemes}` : ''}</li>
                        <li class={b('item')}><HdcpLink version={hdcpVersion} /></li>
                    </ul>),
                }}
            />
        </div>
    ) : null;
}
