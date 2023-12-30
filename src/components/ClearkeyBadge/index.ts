import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { Badge } from '../Badge';
import {
    CLEAR_KEY_SYSTEM,
    isClearKeySupported,
} from 'detect-audio-video';
import { block } from '../../utils/bem';
import { getKeySystemsText } from '../../utils/getKeySystemsText';

const b = block('clearkey-badge');

export function ClearkeyBadge() {
    const [hasClearkey, setClearkey] = useState(false);
    isClearKeySupported().then(result => {
        setClearkey(result);
    });

    const text = [
        getKeySystemsText([CLEAR_KEY_SYSTEM]),
    ].join('\n');

    return html`
        <div class="${b()}">
            ${hasClearkey && Badge({
                text: 'ClearKey',
                size: 'small',
                background: 'white',
                bottom: {
                    text,
                },
            })}
        </div>
    `;
}
