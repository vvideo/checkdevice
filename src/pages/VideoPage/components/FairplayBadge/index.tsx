import { h } from 'preact';
import { useEffect } from 'preact/hooks';

import {
    FAIRPLAY_KEY_SYSTEM,
    FAIRPLAY_V1_KEY_SYSTEM,
    FAIRPLAY_V2_KEY_SYSTEM,
    FAIRPLAY_V3_KEY_SYSTEM,
} from 'detect-audio-video';
import { Badge } from '../../../../components/Badge';
import { KeySystems } from '../KeySystems';
import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { FairplayBadgeController } from './FairplayBadgeController';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';

import './index.css';

const b = block('fairplay-badge');

const fairplayBadgeController = new FairplayBadgeController();

export function FairplayBadge() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        fairplayBadgeController.get().then(() => {
            forceUpdate();
        });
    }, [forceUpdate]);

    const keySystems: string[] = [];

    if (fairplayBadgeController.hasFairplay) {
        keySystems.push(FAIRPLAY_KEY_SYSTEM);
    }

    if (fairplayBadgeController.hasFairplay1) {
        keySystems.push(FAIRPLAY_V1_KEY_SYSTEM);
    }

    if (fairplayBadgeController.hasFairplay2) {
        keySystems.push(FAIRPLAY_V2_KEY_SYSTEM);
    }

    if (fairplayBadgeController.hasFairplay3) {
        keySystems.push(FAIRPLAY_V3_KEY_SYSTEM);
    }

    const sessionTypes = [
        'temporary',
    ];

    if (fairplayBadgeController.isPersistentLicenseSupported) {
        sessionTypes.push('persistent-license');
    }

    return fairplayBadgeController.hasFairplay ? (
        <div class={b()}>
            <Badge
                text="FairPlay"
                background="white"
                top={{ text: 'Apple' }}
                bottom={{
                    text: (<ul class={b('list')}>
                        <li class={b('item')}><KeySystems items={keySystems} /></li>
                        <li class={b('item')}>{fairplayBadgeController.encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${fairplayBadgeController.encryptionSchemes.join(', ')}` : ''}</li>
                        <li class={b('item')}>{`${i18n('Session types')}: ${sessionTypes.join(', ')}`}</li>
                    </ul>)
                }}
            />
        </div>
    ) : null;
}
