import { h } from 'preact';

import { AudioBadge } from './components/AudioBadge';
import { AudioCodecs } from './components/AudioCodecs';
import { Section } from '../../components/ui/Section';
import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { QuestionSurroundSound } from './components/QuestionSurroundSound';
import { block } from '../../utils/css/bem';
import { Vibration } from './components/Vibration';
import { SpeechSynthesis } from './components/SpeechSynthesis';
import { AudioInputsOutputs } from './components/AudioInputsOutputs';
import { keyset } from './i18n/keyset';

import './index.css';

const b = block('audio-page');

addI18nKeyset(keyset);

export function AudioPage() {
    return (
        <Page title={i18n('Audio')}>
            <QuestionSurroundSound />

            <div class={b('badge')}>
                <AudioBadge />
            </div>

            <Section name={i18n('Audio Codecs')}>
                <AudioCodecs />
            </Section>

            <AudioInputsOutputs />

            <Section name={i18n('Speech Synthesis')}>
                <SpeechSynthesis />
            </Section>

            <Vibration />
        </Page>
    );
}
