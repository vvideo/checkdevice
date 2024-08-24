import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useCallback, useState } from 'preact/hooks';
import { Button } from '../../../../components/ui/Button';
import { i18n } from '../../../../i18n';
import { BluetoothError } from '../BluetoothError';
import { Spinner } from '../../../../components/ui/Spinner';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { isSsr } from '../../../../utils/isSsr';

const b = block('bluetooth');

export function Bluetooth() {
    const [ error, setError ] = useState<Error | null>(null);
    const [ disabled, setDisabled ] = useState(false);

    const handleClick = useCallback(() => {
        setDisabled(true);
        
        // @ts-ignore
        navigator.bluetooth.requestDevice({ acceptAllDevices: true }).then(data => {
            setDisabled(false);
            setError(null);

            console.log('Bluetooth device', data);
        }).catch((error: any) => {
            setDisabled(false);
            setError(error);
        });
    }, [disabled, setDisabled, setError, error]);

    // @ts-ignore
    if (!isSsr && !navigator.bluetooth) {
        return (<WarningMessage>{i18n('Web Bluetooth API is not supported.')}</WarningMessage>)
    }

    return (<div class={b()}>
        <Button disabled={disabled} theme="active" onClick={handleClick}><span>{disabled ? (<Spinner size="s" />) : null} {i18n('Request')}</span></Button>
        <BluetoothError error={error} />
    </div>);
}
