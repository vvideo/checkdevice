import { html } from 'htm/preact';
import { AudioBadge } from '../../components/AudioBadge';
import { AudioCodecs } from '../../components/AudioCodecs';
import { PageTitle } from '../../components/PageTitle';
import { Row } from '../../components/Row';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { QuestionSurroundSound } from '../../components/QuestionSurroundSound';
import { block } from '../../utils/css/bem';
import { Vibration } from '../../components/Vibration';

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

            <${Row} name="${i18n('Audio Codecs')}">
                <${AudioCodecs}><//>
            <//>

            <${Row} name="${i18n('Check vibration')}">
                <${Vibration}><//>
            <//>
        <//>`;
}
