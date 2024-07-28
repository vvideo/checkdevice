import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import {
    FAIRPLAY_KEY_SYSTEM,
    FAIRPLAY_V1_KEY_SYSTEM,
    FAIRPLAY_V2_KEY_SYSTEM,
    FAIRPLAY_V3_KEY_SYSTEM,
    isFairPlaySupported,
    isFairPlayV1Supported,
    isFairPlayV2Supported,
    isFairPlayV3Supported,
} from 'detect-audio-video';
import { Badge } from '../Badge';
import { KeySystems } from '../KeySystems';
import { block } from '../../utils/css/bem';
import { getEncryptionSchemes } from '../../utils/drm/getEncryptionSchemes';
import { i18n } from '../../i18n';

const b = block('fairplay-badge');

export function FairplayBadge() {
    const [hasFairplay, setFairplay] = useState(false);

    const [hasFairplay1, setFairplay1] = useState(false);
    const [hasFairplay2, setFairplay2] = useState(false);
    const [hasFairplay3, setFairplay3] = useState(false);

    const [encryptionSchemes, setEncryptionSchemes] = useState<string>('');

    Promise.all([
        isFairPlaySupported(),
        isFairPlayV1Supported(),
        isFairPlayV2Supported(),
        isFairPlayV3Supported(),
        getEncryptionSchemes(FAIRPLAY_KEY_SYSTEM),
    ]).then(data => {
        const [ resultFairPlay, resultFairPlay1, resultFairPlay2, resultFairPlay3, resultEncryption ] = data;
        setFairplay(resultFairPlay);
        setFairplay1(resultFairPlay1);
        setFairplay2(resultFairPlay2);
        setFairplay3(resultFairPlay3);

        setEncryptionSchemes(resultEncryption.join(', '));
    });

    const keySystems: string[] = [];

    if (hasFairplay) {
        keySystems.push(FAIRPLAY_KEY_SYSTEM);
    }

    if (hasFairplay1) {
        keySystems.push(FAIRPLAY_V1_KEY_SYSTEM);
    }

    if (hasFairplay2) {
        keySystems.push(FAIRPLAY_V2_KEY_SYSTEM);
    }

    if (hasFairplay3) {
        keySystems.push(FAIRPLAY_V3_KEY_SYSTEM);
    }

    return hasFairplay ? html`
        <div class="${b()}">
            ${Badge({
                text: 'FairPlay',
                background: 'white',
                top: {
                    text: 'Apple',
                },
                bottom: {
                    text: html`
                        <div><${KeySystems} items="${keySystems}" //></div>
                        <div>${encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${encryptionSchemes}` : ''}</div>
                    `
                },
            })}
        </div>
    ` : '';
}
