import { html } from 'htm/preact';
import { WarningMessage } from '../WarningMessage';
import { i18n } from '../../i18n/i18n';

interface CameraErrorProps {
    error: Error;
}

export function CameraError(props: CameraErrorProps) {
    const { error } = props;

    if (!error) {
        return '';
    }

    if (error.name === 'NotFoundError') {
        return html`<${WarningMessage}>${i18n('Camera not found.')}<//>`;
    }

    if (error.name === 'NotAllowedError') {
        return html`<${WarningMessage}>${i18n('Camera is blocked.')}<//>`;
    }

    return html`<${WarningMessage}>${error.message}<//>`;
}
