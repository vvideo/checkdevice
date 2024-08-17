import { h } from 'preact';
import { useState } from 'preact/hooks';

import {
    PLAYREADY_RECOMMENDATION_KEY_SYSTEM,
    isPlayReadySL150Supported,
    isPlayReadySL2000Supported,
    isPlayReadySL3000Supported,
    isPlayReadySupported,
} from 'detect-audio-video';
import { Badge } from '../../../../components/Badge';
import { HdcpLink } from '../../../../components/HdcpLink';
import { KeySystems } from '../KeySystems';
import { SecurityLevels } from '../SecurityLevels';
import { block } from '../../../../utils/css/bem';
import { getHdcpNotDetected, getHdcpVersion } from '../../../../utils/drm/getHcpVersion';
import { getCachedCheckAllHdcpVersions } from '../../../../utils/drm/getCachedCheckAllHdcpVersions';
import { getEncryptionSchemes } from '../../../../utils/drm/getEncryptionSchemes';
import { i18n } from '../../../../i18n';

import './index.css';

const b = block('playready-badge');

const keySystemsItems = [PLAYREADY_RECOMMENDATION_KEY_SYSTEM];

export function PlayreadyBadge() {
    const [hasPlayready, setPlayready] = useState(false);
    const [hasSL150, setSL150] = useState(false);
    const [hasSL2000, setSL2000] = useState(false);
    const [hasSL3000, setSL3000] = useState(false);
    const [hdcpVersion, setHdcpVersion] = useState('');
    const [encryptionSchemes, setEncryptionSchemes] = useState<string>('');

    getCachedCheckAllHdcpVersions(PLAYREADY_RECOMMENDATION_KEY_SYSTEM).then(data => {
        setHdcpVersion(getHdcpVersion(data));
    }).catch(() => {
        setHdcpVersion(getHdcpNotDetected());
    });

    Promise.all([
        isPlayReadySupported(),
        isPlayReadySL150Supported(),
        isPlayReadySL2000Supported(),
        isPlayReadySL3000Supported(),
        getEncryptionSchemes(PLAYREADY_RECOMMENDATION_KEY_SYSTEM),
    ]).then(data => {
        const [resultPlayReady, resultPlayReady150, resultPlayReady2000, resultPlayReady3000, resultEncryption] = data;
        setPlayready(resultPlayReady);
        setSL150(resultPlayReady150);
        setSL2000(resultPlayReady2000);
        setSL3000(resultPlayReady3000);
        setEncryptionSchemes(resultEncryption.join(', '));
    });

    const levels = [];

    if (hasSL150) {
        levels.push('SL150');
    }

    if (hasSL2000) {
        levels.push('SL2000');
    }

    if (hasSL3000) {
        levels.push('SL3000');
    }

    return hasPlayready ? (
        <div class={b()}>
            <Badge
                text="PlayReady"
                background="white"
                top={{ text: 'Microsoft' }}
                bottom={{
                    text: (<ul class={b('list')}>
                        <li class={b('item')}><SecurityLevels items={levels} /></li>
                        <li class={b('item')}><KeySystems items={keySystemsItems} /></li>
                        <li class={b('item')}>{encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${encryptionSchemes}` : ''}</li>
                        <li class={b('item')}><HdcpLink version={hdcpVersion} /></li>
                    </ul>)
                }}
            />
        </div>
    ) : null;
}
