import { CLEAR_KEY_SYSTEM } from 'detect-audio-video';
import { h } from 'preact';
import { useEffect } from 'preact/hooks';

import { Badge } from '../../../../components/Badge';
import { KeySystems } from '../KeySystems';
import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { ClearkeyBadgeController } from './ClearkeyBadgeController';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';

import './index.css';

const b = block('clearkey-badge');

const keySystemsItems = [CLEAR_KEY_SYSTEM];

const clearkeyBadgeController = new ClearkeyBadgeController();

export function ClearkeyBadge() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        clearkeyBadgeController.get().then(() => {
            forceUpdate();
        });
    }, [forceUpdate]);

    return clearkeyBadgeController.hasClearkey ? (
        <div class={b()}>
            <Badge
                text="ClearKey"
                background="white"
                size="small"
                bottom={{
                    text: (<ul class={b('list')}>
                        <li class={b('item')}><KeySystems items={keySystemsItems} /></li>
                        <li class={b('item')}>{clearkeyBadgeController.encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${clearkeyBadgeController.encryptionSchemes.join(', ')}` : ''}</li>
                    </ul>)
                }}
            />
        </div>
    ) : null;
}
