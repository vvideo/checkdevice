import { h } from 'preact';

import { ErrorMessage } from '../../../../components/ui/ErrorMessage';

interface BluetoothErrorProps {
    error?: Error | null;
}

export function BluetoothError(props: BluetoothErrorProps) {
    if (!props.error) {
        return null;
    }

    return (<ErrorMessage>{String(props.error)}</ErrorMessage>);
}
