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

const b = block('fairplay-badge');

export function FairplayBadge() {
    const [hasFairplay, setFairplay] = useState(false);

    const [hasFairplay1, setFairplay1] = useState(false);
    const [hasFairplay2, setFairplay2] = useState(false);
    const [hasFairplay3, setFairplay3] = useState(false);

    isFairPlaySupported().then(result => {
        setFairplay(result);
    });

    isFairPlayV1Supported().then(result => {
        setFairplay1(result);
    });

    isFairPlayV2Supported().then(result => {
        setFairplay2(result);
    });

    isFairPlayV3Supported().then(result => {
        setFairplay3(result);
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
                    text: KeySystems({ items: keySystems }),
                },
            })}
        </div>
    ` : '';
}
