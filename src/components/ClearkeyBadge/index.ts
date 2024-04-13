import {
    CLEAR_KEY_SYSTEM,
    isClearKeySupported,
} from 'detect-audio-video';
import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { Badge } from '../Badge';
import { KeySystems } from '../KeySystems';
import { block } from '../../utils/bem';

const b = block('clearkey-badge');

export function ClearkeyBadge() {
    const [hasClearkey, setClearkey] = useState(false);
    isClearKeySupported().then(result => {
        setClearkey(result);
    });

    return html`
        <div class="${b()}">
            ${hasClearkey && Badge({
                text: 'ClearKey',
                size: 'small',
                background: 'white',
                bottom: {
                    text: KeySystems({ items: [CLEAR_KEY_SYSTEM] }),
                },
            })}
        </div>
    `;
}
