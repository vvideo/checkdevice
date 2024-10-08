import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { i18n } from '../../../../i18n';
import { List } from '../../../../components/ui/List';
import { noop } from '../../../../utils/function/noop';
import { isSsr } from '../../../../utils/isSsr';
import { Spinner } from '../../../../components/ui/Spinner';
import { block } from '../../../../utils/css/bem';

import './index.css';

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

const b = block('permissions');

export function Permissions() {
    if (!isSsr && !navigator.permissions) {
        return null;
    }

    const [result, _] = useState<{ state: string; name: string; }[]>([]);
    const [done, setDone] = useState<boolean>(isSsr);

    if (isSsr) {
        permissions.forEach(name => {
            result.push({ state: '…', name});
        });
    }

    const items: [string, string | h.JSX.Element][] = [];

    result.map(item => {
        items.push([item.name, (<span class={b('value', { state: item.state })}>{item.state}</span>)]);
    });

    items.sort((a, b) => a[0] > b[0] ? 1 : -1);

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

    return done ? (
        <List title={i18n('Permissions')} items={items} />) :
        (<Spinner size="xl" />);
}
