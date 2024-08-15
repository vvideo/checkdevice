import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { ErrorMessage } from '../ui/ErrorMessage';

interface MicErrorProps {
    error: Error;
}

export function MicError(props: MicErrorProps) {
    const { error } = props;

    if (!error) {
        return '';
    }

    if (error.name === 'NotFoundError') {
        return html`<${ErrorMessage}>${i18n('Mic not found.')}<//>`;
    }

    if (error.name === 'NotAllowedError') {
        return html`<${ErrorMessage}>${i18n('Mic is blocked.')}<//>`;
    }

    return html`<${ErrorMessage}>${error.message}<//>`;
}
