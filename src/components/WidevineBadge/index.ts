import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { Badge } from '../Badge';
import {
    WIDEWINE_KEY_SYSTEM,
    isWidevineL1Supported,
    isWidevineL3Supported,
    isWidevineSupported,
} from 'detect-audio-video';
import { block } from '../../utils/bem';
import { getKeySystemsText } from '../../utils/getKeySystemsText';
import { getSecurityLevelsText } from '../../utils/getSecurityLevelsText';

const b = block('widevine-badge');

export function WidevineBadge() {
    const [hasWidevine, setWidevine] = useState(false);
    const [hasL1, setL1] = useState(false);
    const [hasL3, setL3] = useState(false);
    isWidevineSupported().then(result => {
        setWidevine(result);
    });

    isWidevineL1Supported().then(result => {
        setL1(result);
    });

    isWidevineL3Supported().then(result => {
        setL3(result);
    });

    const levels = [];

    if (hasL1) {
        levels.push('L1');
    }

    if (hasL3) {
        levels.push('L3');
    }

    const text = [
        getSecurityLevelsText(levels),
        getKeySystemsText([WIDEWINE_KEY_SYSTEM]),
    ].join('\n')

    return html`
        <div class="${b()}">
            ${hasWidevine && Badge({
                text: 'Widevine',
                background: 'white',
                top: {
                    text: 'Google',
                },
                bottom: {
                    text,
                },
            })}
        </div>
    `;
}
