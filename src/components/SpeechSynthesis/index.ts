import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/css/bem';
import { Button } from '../ui/Button';
import { i18n } from '../../i18n';
import { getChecked } from '../../utils/getChecked';
import { Input } from '../ui/Input';
import { InfoLink } from '../InfoLink';
import { isSsr } from '../../utils/isSsr';

import './index.css';

const b = block('speech-synthesis');

export function SpeechSynthesis() {
    const [text, setText] = useState<string>(i18n('Hello world!'));

    function speech() {
        const ssu = new SpeechSynthesisUtterance(text);
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

    const isSupported = typeof SpeechSynthesis === 'function' && typeof speechSynthesis !== 'undefined';

    return html`<div class="${b()}">
        ${isSupported && !isSsr ? '' : html`<div class="${b('supported')}">Web Speech API<${InfoLink} title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis"><//>: ${getChecked(isSupported)}</div>`}
        ${isSupported || isSsr ? html`<div class="${b('form')}">
            <${Input}
                class="${b('input')}"
                title="${i18n('Input text for speech synthesis')}"
                placeholder="${i18n('Input text')}"
                value="${text}"
                onKeyPress="${handleKeyPress}"
                onChange="${handleInput}"
            /> <${Button} onClick=${handleSpeak} title="${i18n('Speak words')}">${i18n('Speak')}<//>
        </div>` : ''}
    </div>`;
}