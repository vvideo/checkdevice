import { h } from 'preact';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { i18n } from '../../../../i18n';

interface AudioErrorProps {
    error: Error | null;
}

export function AudioError(props: AudioErrorProps) {
    const { error } = props;
    if (!error) {
        return null;
    }

    let text = '';
    switch(error.name) {
        case 'AbortError':
            text = i18n('Action is aborted.');
            break;
        case 'NotAllowedError':
            text = i18n('Access denied.');
            break;
        case 'NotFoundError':
            text = i18n('Not found.');
            break;
        case 'NotReadableError':
            text = i18n('Hardware error has occurred that prevents access to the device.');
            break;
        case 'OverconstrainedError':
            text = i18n('No devices were found as a result of the specified restrictions.');
            break;
        case 'SecurityError':
            text = i18n('Security error.');
            break;
        case 'TypeError':
            text = i18n('Type error.');
            break;
    }

    return (<ErrorMessage>{text}</ErrorMessage>);
}