import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import {
    PLAYREADY_RECOMMENDATION_KEY_SYSTEM,
    isPlayReadySL150Supported,
    isPlayReadySL2000Supported,
    isPlayReadySL3000Supported,
    isPlayReadySupported,
} from 'detect-audio-video';
import { Badge } from '../Badge';
import { HdcpDetailsLink } from '../HdcpDetailsLink';
import { KeySystems } from '../KeySystems';
import { SecurityLevels } from '../SecurityLevels';
import { block } from '../../utils/bem';
import { getHdcpNotDetected, getHdcpVersion } from '../../utils/getHcpVersion';
import { getCachedCheckAllHdcpVersions } from '../../utils/getCachedCheckAllHdcpVersions';

const b = block('playready-badge');

const keySystemsItems = [PLAYREADY_RECOMMENDATION_KEY_SYSTEM];

export function PlayreadyBadge() {
    const [hasPlayready, setPlayready] = useState(false);
    const [hasSL150, setSL150] = useState(false);
    const [hasSL2000, setSL2000] = useState(false);
    const [hasSL3000, setSL3000] = useState(false);
    const [hdcpVersion, setHdcpVersion] = useState('');

    getCachedCheckAllHdcpVersions(PLAYREADY_RECOMMENDATION_KEY_SYSTEM).then(data => {
        setHdcpVersion(getHdcpVersion(data));
    }).catch(() => {
        setHdcpVersion(getHdcpNotDetected());
    });

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
        html`<div><${SecurityLevels} items="${levels}" //></div>`,
        html`<div><${KeySystems} items="${keySystemsItems}" //></div>`,
        html`<div>${hdcpVersion}\u00A0<${HdcpDetailsLink} //></div>`,
    ];

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
