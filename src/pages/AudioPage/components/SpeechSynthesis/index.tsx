import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { block } from '../../../../utils/css/bem';
import { Button } from '../../../../components/ui/Button';
import { i18n } from '../../../../i18n';
import { getChecked } from '../../../../utils/string/getChecked';
import { Input } from '../../../../components/ui/Input';
import { InfoLink } from '../../../../components/ui/InfoLink';
import { isSsr } from '../../../../utils/isSsr';

import './index.css';
import { Select, SelectOption } from '../../../../components/ui/Select';

const b = block('speech-synthesis');

export function SpeechSynthesis() {
    const [text, setText] = useState<string>(i18n('Hello world!'));
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

    function speech() {
        const ssu = new SpeechSynthesisUtterance(text);
        ssu.voice = voice;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(ssu);
    }

    const handleSpeak = useCallback(() => {
        speech();
    }, [speech]);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.code === 'Enter') {
            speech();
        }
    }, [speech])

    const handleInput = useCallback((value: string) => {
        setText(value);
    }, [setText]);

    const handleSelectChange = useCallback((value: string) => {
        const voices = speechSynthesis.getVoices().filter(item => item.voiceURI === value);

        if (voices.length) {
            setVoice(voices[0]);
        }
    }, [setVoice]);

    const isSupported = typeof SpeechSynthesis === 'function' && typeof speechSynthesis !== 'undefined';

    const voices = isSupported ? speechSynthesis.getVoices() : [];

    const selectOptions: SelectOption[] = voices.map(item => {
        return {
            value: item.voiceURI,
            title: item.name + ', ' + item.lang,
        };
    });

    selectOptions.unshift({
        value: '',
        title: i18n('Default'),
    });

    return (
        <div class={b()}>
            {isSupported && !isSsr ? '' : (<div class={b('supported')}>Web Speech API<InfoLink title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis"></InfoLink>: {getChecked(isSupported)}</div>)}
            {isSupported || isSsr ? (<div class={b('form')}>
                <div class={b('voice')}>
                    {i18n('Voice: ')} <Select class={b('select')} value={voice?.voiceURI} onChange={handleSelectChange} options={selectOptions} />
                </div>

                <Input
                    class={b('input')}
                    title={i18n('Input text for speech synthesis')}
                    placeholder={i18n('Input text')}
                    value={text}
                    onKeyPress={handleKeyPress}
                    onChange={handleInput}
                /> <Button onClick={handleSpeak} title={i18n('Speak words')}>{i18n('Speak')}</Button>
            </div>) : ''}
        </div>
    );
}
