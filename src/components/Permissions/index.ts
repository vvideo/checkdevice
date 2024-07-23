import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';
import { noop } from '../../utils/noop';
import { isSsr } from '../../utils/isSsr';

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
    'accelerometer', 'gyroscope', 'magnetometer', 'ambient-light-sensor',
    'storage-access', 'top-level-storage-access', 'persistent-storage',
    'midi',
    'screen-wake-lock',
    'window-management',
    'xr-spatial-tracking',
];

export function Permissions() {
    if (isSsr || !navigator.permissions) {
        return '';
    }

    const [result, _] = useState<{ state: string; name: string; }[]>([]);
    const [done, setDone] = useState(false);

    const items = result
        .map(item => [item.name, item.state])
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
        '';
}
