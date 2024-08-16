import { h } from 'preact';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { i18n } from '../../../../i18n';

interface UsbErrorProps {
    error: Error | null;
}

export function UsbError(props: UsbErrorProps) {
    const { error } = props;

    if (!error) {
        return null;
    }
    
    if (error.name === 'NotFoundError') {
        return (<WarningMessage>{i18n('USB device not found.')}</WarningMessage>);
    }

    if (error.name === 'NotAllowedError') {
        return (<WarningMessage>{i18n('USB device is blocked.')}</WarningMessage>);
    }

    return (<WarningMessage>{error.message}</WarningMessage>);
}
