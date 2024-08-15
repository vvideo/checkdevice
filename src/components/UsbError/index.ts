import { html } from 'htm/preact';
import { WarningMessage } from '../ui/WarningMessage';
import { i18n } from '../../i18n';

interface UsbErrorProps {
    error: Error;
}

export function UsbError(props: UsbErrorProps) {
    const { error } = props;

    if (!error) {
        return '';
    }
    
    if (error.name === 'NotFoundError') {
        return html`<${WarningMessage}>${i18n('USB device not found.')}<//>`;
    }

    if (error.name === 'NotAllowedError') {
        return html`<${WarningMessage}>${i18n('USB device is blocked.')}<//>`;
    }

    return html`<${WarningMessage}>${error.message}<//>`;
}
