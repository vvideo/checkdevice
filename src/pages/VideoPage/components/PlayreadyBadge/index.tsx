import { h } from 'preact';

import {
    PLAYREADY_RECOMMENDATION_KEY_SYSTEM,
} from 'detect-audio-video';
import { Badge } from '../../../../components/Badge';
import { HdcpLink } from '../HdcpLink';
import { KeySystems } from '../KeySystems';
import { SecurityLevels } from '../SecurityLevels';
import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { PlayreadyBadgeController } from './PlayreadyBadgeController';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { useEffect } from 'preact/hooks';

import './index.css';

const b = block('playready-badge');

const keySystemsItems = [PLAYREADY_RECOMMENDATION_KEY_SYSTEM];

const playreadyBadgeController = new PlayreadyBadgeController();

export function PlayreadyBadge() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        playreadyBadgeController.get().then(() => {
            forceUpdate();
        });
    }, [forceUpdate]);

    const levels = [];

    if (playreadyBadgeController.hasSL150) {
        levels.push('SL150');
    }

    if (playreadyBadgeController.hasSL2000) {
        levels.push('SL2000');
    }

    if (playreadyBadgeController.hasSL3000) {
        levels.push('SL3000');
    }

    const sessionTypes = [
        'temporary',
    ];

    if (playreadyBadgeController.isPersistentLicenseSupported) {
        sessionTypes.push('persistent-license');
    }

    return playreadyBadgeController.hasPlayready ? (
        <div class={b()}>
            <Badge
                text="PlayReady"
                background="white"
                top={{ text: 'Microsoft' }}
                bottom={{
                    text: (<ul class={b('list')}>
                        <li class={b('item')}><SecurityLevels items={levels} /></li>
                        <li class={b('item')}><KeySystems items={keySystemsItems} /></li>
                        <li class={b('item')}>{playreadyBadgeController.encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${playreadyBadgeController.encryptionSchemes.join(', ')}` : ''}</li>
                        <li class={b('item')}>{`${i18n('Session types')}: ${sessionTypes.join(', ')}`}</li>
                        <li class={b('item')}><HdcpLink version={playreadyBadgeController.hdcpVersion} /></li>
                    </ul>)
                }}
            />
        </div>
    ) : null;
}
