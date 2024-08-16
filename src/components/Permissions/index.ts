import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { i18n } from '../../i18n';
import { List } from '../ui/List';
import { noop } from '../../utils/noop';
import { isSsr } from '../../utils/isSsr';
import { Spinner } from '../ui/Spinner';

const permissions = [
    'accessibility-events',
    'background-sync',
    'bluetooth',
    'clipboard-read',
    'clipboard-write',
    'compute-pressure',
    'geolocation',
    'local-fonts',
    'microphone', 'camera',
    'notifications',
    'push',
    'speaker-selection',
    'accelerometer', 'gyroscope', 'magnetometer', 'ambient-light-sensor',
    'storage-access', 'top-level-storage-access', 'persistent-storage',
    'midi',
    'screen-wake-lock',
    'window-management',
    'xr-spatial-tracking',
];

function getStatusColor(state: string) {
    const states: Record<string, string> = {
        'granted': 'lightgreen',
        'prompt': '#ffff80',
        'denied': 'lightcoral',
    };

    return states[state] || 'white';
}

export function Permissions() {
    if (!isSsr && !navigator.permissions) {
        return '';
    }

    const [result, _] = useState<{ state: string; name: string; }[]>([]);
    const [done, setDone] = useState<boolean>(isSsr);

    if (isSsr) {
        permissions.forEach(name => {
            result.push({ state: '…', name});
        });
    }

    const items = result
        .map(item => {
            const color = getStatusColor(item.state);
            return [item.name, html`<span style="color: ${color}">${item.state}</span>`];
        })
        .sort((a, b) => a[0] > b[0] ? 1 : -1);

    useEffect(() => {
        const promises: Promise<void>[] = [];
        permissions.forEach(name => {
            // @ts-ignore
            const query: PermissionDescriptor = { name };
            if (name === 'push') {
                // @ts-ignore
                query.userVisibleOnly = true;
            }

            promises.push(navigator.permissions.query(query).then(data => {
                result.push({ name, state: data.state });
            }).catch(noop));
        });

        Promise.all(promises).then(() => {
            setDone(true);
        });
    }, []);

    return done ?
        html`<${List} title="${i18n('Permissions')}" items="${items}" //>` :
        html`<${Spinner} //>`;
}
