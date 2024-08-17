import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { Question4K } from '../Question4K';
import { QuestionHdr } from '../QuestionHdr';
import { QuestionDrm4K } from '../QuestionDrm4K';

import './index.css';

const b = block('video-questions');

export function VideoQuestions() {
    return (
        <div class={b()}>
            <Question4K />
            <QuestionHdr />
            <QuestionDrm4K />
        </div>
    );
}
