import { h } from 'preact';

import { ErrorMessage } from '../../../../components/ui/ErrorMessage';

interface MidiErrorProps {
    error?: Error | null;
}

export function MidiError(props: MidiErrorProps) {
    if (!props.error) {
        return null;
    }

    return (<ErrorMessage>{String(props.error)}</ErrorMessage>);
}
