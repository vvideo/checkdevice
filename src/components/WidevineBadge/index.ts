import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { Badge } from '../Badge';
import {
    WIDEWINE_KEY_SYSTEM,
    isWidevineL1Supported,
    isWidevineL3Supported,
    isWidevineSupported,
} from 'detect-audio-video';
import { HdcpLink } from '../HdcpLink';
import { getHdcpNotDetected, getHdcpVersion } from '../../utils/getHcpVersion';
import { KeySystems } from '../KeySystems';
import { SecurityLevels } from '../SecurityLevels';
import { block } from '../../utils/bem';
import { getCachedCheckAllHdcpVersions } from '../../utils/getCachedCheckAllHdcpVersions';

const b = block('widevine-badge');

export function WidevineBadge() {
    const [hasWidevine, setWidevine] = useState(false);
    const [hasL1, setL1] = useState(false);
    const [hasL3, setL3] = useState(false);
    const [hdcpVersion, setHdcpVersion] = useState('');

    getCachedCheckAllHdcpVersions(WIDEWINE_KEY_SYSTEM).then(data => {
        setHdcpVersion(getHdcpVersion(data));
    }).catch(() => {
        setHdcpVersion(getHdcpNotDetected());
    });

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

    return html`
        <div class="${b()}">
            ${hasWidevine && Badge({
                text: 'Widevine',
                background: 'white',
                top: {
                    text: 'Google',
                },
                bottom: {
                    text: [
                        html`<div><${SecurityLevels} items="${levels}" //></div>`,
                        html`<div><${KeySystems} items="${[WIDEWINE_KEY_SYSTEM]}" //></div>`,
                        html`<div><${HdcpLink} version="${hdcpVersion}" //></div>`,
                    ],
                },
            })}
        </div>
    `;
}
