import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { i18n } from '../../../../i18n';
import { Button } from '../../../../components/ui/Button';
import { List } from '../../../../components/ui/List';
import { block } from '../../../../utils/css/bem';
import { noop } from '../../../../utils/function/noop';
import { AudioError } from '../AudioError';
import { isSsr } from '../../../../utils/isSsr';

import './index.css';
import { Section } from '../../../../components/ui/Section';

const b = block('audio-inputs-outputs');

export function AudioInputsOutputs() {
    const [error, setError] = useState<Error | null>(null);
    const [outputs, setOutputs] = useState<string[]>([]);
    const [inputs, setInputs] = useState<string[]>([]);

    const handleClick = useCallback(() => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
            return navigator.mediaDevices.enumerateDevices().then(deviceInfo => {
                const inputItems: string[] = [];
                const outputItems: string[] = [];

                deviceInfo.forEach(device => {
                    if (device.kind === 'audioinput') {
                        inputItems.push(device.label);
                    }

                    if (device.kind === 'audiooutput') {
                        outputItems.push(device.label);
                    }
                });

                setInputs(inputItems);
                setOutputs(outputItems);
                setError(null);
            }).catch(noop);
        }).catch(error => {
            setError(error);
        });
    }, []);

    const inputItems: [string][] = inputs.map(item => [item]);
    const outputItems: [string][] = outputs.map(item => [item]);

    if (!isSsr && !navigator.mediaDevices?.getUserMedia) {
        return null;
    }

    return (<Section class={b()} name={i18n('Audio Inputs and Outputs')}>
        <Button onClick={handleClick}>{i18n('Request inputs and outputs')}</Button>

        <AudioError error={error} />

        {inputItems.length || outputs.length ? (
            <div class={b('lists')}>
                <div class={b('list')}>
                    🎙️ {i18n('Inputs')}<br/>
                    {inputItems.length ? (<List class={b('list')} items={inputItems} />) : i18n('Not detected.')}
                </div>

                <div class={b('list')}>
                    🔈 {i18n('Outputs')}<br/>
                    {outputItems.length ? (<List class={b('list')} items={outputItems} />) : i18n('Not detected.')}
                </div>
            </div>
        ) : null}
    </Section>);
}
