import {
    CLEAR_KEY_SYSTEM,
    isClearKeySupported,
} from 'detect-audio-video';
import { h } from 'preact';
import { useState } from 'preact/hooks';

import { Badge } from '../Badge';
import { KeySystems } from '../KeySystems';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n';
import { getEncryptionSchemes } from '../../utils/drm/getEncryptionSchemes';

import './index.css';

const b = block('clearkey-badge');

const keySystemsItems = [CLEAR_KEY_SYSTEM];

export function ClearkeyBadge() {
    const [hasClearkey, setClearkey] = useState(false);
    const [encryptionSchemes, setEncryptionSchemes] = useState<string>('');

    isClearKeySupported().then(result => {
        setClearkey(result);
    });

    getEncryptionSchemes(CLEAR_KEY_SYSTEM).then(result => {
        setEncryptionSchemes(result.join(', '));
    });

    return hasClearkey ? (
        <div class={b()}>
            <Badge 
                text="ClearKey"
                background="white"
                size="small"
                bottom={{
                    text: (<ul class={b('list')}>
                        <li class={b('item')}><KeySystems items={keySystemsItems} /></li>
                        <li class={b('item')}>{encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${encryptionSchemes}` : ''}</li>
                    </ul>)
                }}
            />
        </div>
    ) : null;
}
