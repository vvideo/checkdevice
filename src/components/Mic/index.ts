import { html } from 'htm/preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import { Button } from '../Button';
import { i18n } from '../../i18n/i18n';
import { Checkbox } from '../Checkbox';
import { block } from '../../utils/bem';
import { micWaveform } from '../../lib/MicWaveform';

import './index.css';

const b = block('mic');

export function Mic() {
    const refCanvas = useRef<HTMLCanvasElement>();
    const [muted, setMuted] = useState(true);
    const [started, setStarted] = useState(false);

    const handleSelectMic = useCallback(() => {
        if (!refCanvas.current) {
            return;
        }

        micWaveform.start(refCanvas.current);
        micWaveform.setMuted(muted);
        setStarted(true);
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

    return html`
        ${started ? stopButton : selectButton}<${Checkbox} class="${b('hear-yourself')}" label="${i18n('Hear yourself')}" onClick="${handleHearYourself}" />

        <canvas ref="${refCanvas}" class="${b('canvas')}" width="300" height="200"></canvas>
    `;
}