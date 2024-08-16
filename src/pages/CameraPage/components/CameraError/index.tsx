import { h } from 'preact';

import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { i18n } from '../../../../i18n';

interface CameraErrorProps {
    error: Error | null;
}

export function CameraError(props: CameraErrorProps) {
    const { error } = props;

    if (!error) {
        return null;
    }

    if (error.name === 'NotFoundError') {
        return (<ErrorMessage>{i18n('Camera not found.')}</ErrorMessage>);
    }

    if (error.name === 'NotAllowedError') {
        return (<ErrorMessage>{i18n('Camera is blocked.')}</ErrorMessage>);
    }

    return (<ErrorMessage>{error.message}</ErrorMessage>);
}
