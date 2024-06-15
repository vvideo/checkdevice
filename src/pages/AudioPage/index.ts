import { html } from 'htm/preact';
import { AudioBadge } from '../../components/AudioBadge';
import { AudioCodecs } from '../../components/AudioCodecs';
import { Header } from '../../components/Header';
import { Row } from '../../components/Row';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { QuestionSurroundSound } from '../../components/QuestionSurroundSound';
import { block } from '../../utils/bem';

import './index.css';

const b = block('audio-page');

export function AudioPage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Audio')}
            <//>

            <${QuestionSurroundSound}><//>

            <div class="${b('badge')}">
                <${AudioBadge}><//>
            </div>

            <${Row} name="${i18n('Audio Codecs')}">
                <${AudioCodecs}><//>
            <//>
        <//>`;
}
