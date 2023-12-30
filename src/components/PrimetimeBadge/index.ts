import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { Badge } from '../Badge';
import {
    PRIMETIME_KEY_SYSTEM,
    isPrimetimeSupported,
} from 'detect-audio-video';
import { block } from '../../utils/bem';
import { getKeySystemsText } from '../../utils/getKeySystemsText';

const b = block('primetime-badge');

export function PrimetimeBadge() {
    const [hasPrimetime, setPrimetime] = useState(false);
    isPrimetimeSupported().then(result => {
        setPrimetime(result);
    });

    const text = [
        getKeySystemsText([
            PRIMETIME_KEY_SYSTEM,
        ]),
    ].join('\n')

    return html`
        <div class="${b()}">
            ${hasPrimetime && Badge({
                text: 'Primetime',
                background: 'white',
                top: {
                    text: 'Adobe',
                },
                bottom: {
                    text,
                },
            })}
        </div>
    `;
}
