import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/css/bem';
import { Button } from '../Button';
import { i18n } from '../../i18n';
import { getChecked } from '../../utils/getChecked';
import { Input } from '../Input';
import { InfoLink } from '../InfoLink';
import { isSsr } from '../../utils/isSsr';

import './index.css';

const b = block('speech-synthesis');

export function SpeechSynthesis() {
    const [text, setText] = useState<string>(i18n('Hello world!'));
    const handleSpeak = useCallback(() => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }, [text]);

    const handleInput = useCallback((value: string) => {
        setText(value);
    }, [setText]);

    const isSupported = typeof SpeechSynthesis === 'function';

    return html`<div class="${b()}">
        ${!isSupported && !isSsr ? '' : html`<div class="${b('supported')}">Web Speech API<${InfoLink} title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis"><//>: ${getChecked(isSupported)}</div>`}
        ${isSupported || isSsr ? html`<div class="${b('form')}">
            <${Input}
                title="${i18n('Input text for speech synthesis')}"
                placeholder="${i18n('Input text')}"
                value="${text}"
                onChange="${handleInput}"
            /> <${Button} onClick=${handleSpeak} title="${i18n('Speak words')}">${i18n('Speak')}<//>
        </div>` : ''}
    </div>`;
}