import { html } from 'htm/preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import { Button } from '../ui/Button';
import { i18n } from '../../i18n';
import { Checkbox } from '../ui/Checkbox';
import { block } from '../../utils/css/bem';
import { micWaveform } from '../../lib/MicWaveform';
import { MicInfo, MicInfoSsr } from '../MicInfo';
import { MicError } from '../MicError';
import { isSsr } from '../../utils/isSsr';

import './index.css';

const b = block('mic');

export function Mic() {
    const refCanvas = useRef<HTMLCanvasElement>();
    const [muted, setMuted] = useState(true);
    const [started, setStarted] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const handleSelectMic = useCallback(() => {
        if (!refCanvas.current) {
            return;
        }

        micWaveform.setMuted(muted);
        micWaveform.start(refCanvas.current).then(() => {
            setStarted(true);
            setError(null);
        }).catch(e => {
            setError(e);
            console.log(e);
        });
    }, [muted, setStarted]);

    const handleHearYourself = useCallback((value: boolean) => {
        setMuted(!value);
        micWaveform.setMuted(!value);
    }, [setMuted]);

    const handleStop = useCallback(() => {
        micWaveform.stop();
        setStarted(false);
    }, [setMuted, setStarted]);

    const selectButton = html`<${Button} theme="active" onClick="${handleSelectMic}">${i18n('Check mic')}<//>`;
    const stopButton = html`<${Button} theme="red" onClick="${handleStop}">${i18n('Stop')}<//>`;
    const streamParams = micWaveform.getStreamParams();

    return html`<div class="${b({ started })}">
        ${started ? stopButton : selectButton}<${Checkbox} class="${b('hear-yourself')}" label="${i18n('Hear yourself')}" onClick="${handleHearYourself}" />

        <${MicError} error="${error}" //>

        <div class="${b('canvas-container')}">
            <canvas title="${i18n('Sound spectrum visualizer for mic')}" ref="${refCanvas}" class="${b('canvas')}" width="300" height="200"></canvas>
            <div class="${b('speak-up', { started })}">📢 ${i18n('Speak up!')}</div>
        </div>
        ${isSsr ? html`<${MicInfoSsr} //>` : (streamParams?.audio ? html`<${MicInfo} ..."${streamParams.audio}" />` : '')}
    </div>`;
}