import { h } from 'preact';
import { i18n } from '../../../../i18n';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';

interface MicErrorProps {
    error: Error | null;
}

export function MicError(props: MicErrorProps) {
    const { error } = props;

    if (!error) {
        return null;
    }

    if (error.name === 'NotFoundError') {
        return (<ErrorMessage>{i18n('Mic not found.')}</ErrorMessage>);
    }

    if (error.name === 'NotAllowedError') {
        return (<ErrorMessage>{i18n('Mic is blocked.')}</ErrorMessage>);
    }

    return (<ErrorMessage>{error.message}</ErrorMessage>);
}
