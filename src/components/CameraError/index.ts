import { html } from 'htm/preact';
import { ErrorMessage } from '../ui/ErrorMessage';
import { i18n } from '../../i18n';

interface CameraErrorProps {
    error: Error;
}

export function CameraError(props: CameraErrorProps) {
    const { error } = props;

    if (!error) {
        return '';
    }

    if (error.name === 'NotFoundError') {
        return html`<${ErrorMessage}>${i18n('Camera not found.')}<//>`;
    }

    if (error.name === 'NotAllowedError') {
        return html`<${ErrorMessage}>${i18n('Camera is blocked.')}<//>`;
    }

    return html`<${ErrorMessage}>${error.message}<//>`;
}
