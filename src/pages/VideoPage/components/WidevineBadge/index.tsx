import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import {
    WIDEWINE_KEY_SYSTEM,
} from 'detect-audio-video';

import { Badge } from '../../../../components/Badge';
import { HdcpLink } from '../HdcpLink';
import { KeySystems } from '../KeySystems';
import { SecurityLevels } from '../SecurityLevels';
import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { WidevineBadgeController } from './WidevineBadgeController';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';

import './index.css';

const b = block('widevine-badge');

const widevineBadgeConroller = new WidevineBadgeController();

export function WidevineBadge() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        widevineBadgeConroller.get().then(() => {
            forceUpdate();
        });
    }, [forceUpdate]);

    const levels = [];

    if (widevineBadgeConroller.hasL1) {
        levels.push('L1');
    }

    if (widevineBadgeConroller.hasL3) {
        levels.push('L3');
    }

    const sessionTypes = [
        'temporary',
    ];

    if (widevineBadgeConroller.isPersistentLicenseSupported) {
        sessionTypes.push('persistent-license');
    }

    return widevineBadgeConroller.hasWidevine ? (
        <div class={b()}>
            <Badge
                text="Widevine"
                background="white"
                top={{ text: 'Google' }}
                bottom={{
                    text: (<ul class={b('list')}>
                        <li class={b('item')}><SecurityLevels items={levels} /></li>
                        <li class={b('item')}><KeySystems items={[WIDEWINE_KEY_SYSTEM]} /></li>
                        <li class={b('item')}>{widevineBadgeConroller.encryptionSchemes.length ? `${i18n('Encryption schemes')}: ${widevineBadgeConroller.encryptionSchemes.join(', ')}` : ''}</li>
                        <li class={b('item')}>{`${i18n('Session types')}: ${sessionTypes.join(', ')}`}</li>
                        <li class={b('item')}><HdcpLink version={widevineBadgeConroller.hdcpVersion} /></li>
                    </ul>),
                }}
            />
        </div>
    ) : null;
}
