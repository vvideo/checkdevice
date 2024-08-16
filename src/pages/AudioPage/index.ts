import { html } from 'htm/preact';
import { AudioBadge } from '../../components/AudioBadge';
import { AudioCodecs } from '../../components/AudioCodecs';
import { PageTitle } from '../../components/PageTitle';
import { Section } from '../../components/ui/Section';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { QuestionSurroundSound } from '../../components/QuestionSurroundSound';
import { block } from '../../utils/css/bem';
import { Vibration } from '../../components/Vibration';
import { SpeechSynthesis } from '../../components/SpeechSynthesis';

import './index.css';

const b = block('audio-page');

export function AudioPage() {
    return html`
        <${Page}>
            <${PageTitle}}>
                ${i18n('Audio')}
            <//>

            <${QuestionSurroundSound}><//>

            <div class="${b('badge')}">
                <${AudioBadge}><//>
            </div>

            <${Section} name="${i18n('Audio Codecs')}">
                <${AudioCodecs}><//>
            <//>

            <${Section} name="${i18n('Speech Synthesis')}">
                <${SpeechSynthesis}><//>
            <//>

            <${Vibration}><//>
        <//>`;
}
