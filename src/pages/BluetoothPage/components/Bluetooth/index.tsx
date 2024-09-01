import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useCallback, useState } from 'preact/hooks';
import { Button } from '../../../../components/ui/Button';
import { i18n } from '../../../../i18n';
import { BluetoothError } from '../BluetoothError';
import { Spinner } from '../../../../components/ui/Spinner';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { isSsr } from '../../../../utils/isSsr';
import { List } from '../../../../components/ui/List';

import './index.css';

const b = block('bluetooth');

export function Bluetooth() {
    const [ error, setError ] = useState<Error | null>(null);
    const [ disabled, setDisabled ] = useState(false);
    const [ device, setDevice ] = useState<any>(null);

    const handleClick = useCallback(() => {
        setDisabled(true);

        // @ts-ignore
        navigator.bluetooth.requestDevice({ acceptAllDevices: true }).then(bluetoothDevice => {
            setDisabled(false);
            setError(null);
            setDevice(bluetoothDevice);
        }).catch((error: any) => {
            setDisabled(false);
            setError(error);
        });
    }, [disabled, setDisabled, setError, error]);

    // @ts-ignore
    if (!isSsr && !navigator.bluetooth) {
        return (<WarningMessage>{i18n('Web Bluetooth API is not supported.')}</WarningMessage>)
    }

    const items: [string, string][] = [];
    if (device) {
        items.push([
            'Name',
            device.name,
        ], [
            'Id',
            device.id,
        ]);
    }

    return (<div class={b()}>
        <Button disabled={disabled} theme="active" onClick={handleClick}>{disabled ? (<Spinner size="s" />) : null} {i18n('Request')}</Button>

        <List class={b('list')} items={items} />

        <BluetoothError error={error} />
    </div>);
}
