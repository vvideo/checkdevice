import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { Badge } from '../Badge';
import {
    PLAYREADY_RECOMMENDATION_KEY_SYSTEM,
    isPlayReadySL150Supported,
    isPlayReadySL2000Supported,
    isPlayReadySL3000Supported,
    isPlayReadySupported,
} from 'detect-audio-video';
import { block } from '../../utils/bem';
import { getSecurityLevelsText } from '../../utils/getSecurityLevelsText';
import { getKeySystemsText } from '../../utils/getKeySystemsText';

const b = block('playready-badge');

export function PlayreadyBadge() {
    const [hasPlayready, setPlayready] = useState(false);
    const [hasSL150, setSL150] = useState(false);
    const [hasSL2000, setSL2000] = useState(false);
    const [hasSL3000, setSL3000] = useState(false);

    isPlayReadySupported().then(result => {
        setPlayready(result);
    });

    isPlayReadySL150Supported().then(result => {
        setSL150(result);
    });

    isPlayReadySL2000Supported().then(result => {
        setSL2000(result);
    });

    isPlayReadySL3000Supported().then(result => {
        setSL3000(result);
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

    const text = [
        getSecurityLevelsText(levels),
        getKeySystemsText([PLAYREADY_RECOMMENDATION_KEY_SYSTEM]),
    ].join('\n');

    return html`
        <div class="${b()}">
            ${hasPlayready && Badge({
                text: 'PlayReady',
                background: 'white',
                top: {
                    text: 'Microsoft',
                },
                bottom: {
                    text,
                },
            })}
        </div>
    `;
}
