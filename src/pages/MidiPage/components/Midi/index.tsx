import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { useCallback, useState } from 'preact/hooks';
import { Button } from '../../../../components/ui/Button';
import { i18n } from '../../../../i18n';
import { MidiError } from '../MidiError';
import { Spinner } from '../../../../components/ui/Spinner';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { isSsr } from '../../../../utils/isSsr';

const b = block('midi');

export function Midi() {
    const [ error, setError ] = useState<Error | null>(null);
    const [ disabled, setDisabled ] = useState(false);

    const handleClick = useCallback(() => {
        setDisabled(true);

        navigator.requestMIDIAccess().then(access => {
            setDisabled(false);
            setError(null);

            console.log('MIDIAccess', access);
        }).catch(error => {
            setDisabled(false);
            setError(error);
        });
    }, [disabled, setDisabled, setError, error]);

    if (!isSsr && typeof navigator.requestMIDIAccess !== 'function') {
        return (<WarningMessage>{i18n('Web MIDI API is not supported.')}</WarningMessage>)
    }

    return (<div class={b()}>
        <Button disabled={disabled} theme="active" onClick={handleClick}><span>{disabled ? (<Spinner size="s" />) : null} {i18n('Request')}</span></Button>
        <MidiError error={error} />
    </div>);
}
