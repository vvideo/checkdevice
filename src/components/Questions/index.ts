import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { Question4K } from '../Question4K';
import { QuestionHdr } from '../QuestionHdr';
import { QuestionSurroundSound } from '../QuestionSurroundSound';
import { QuestionDrm4K } from '../QuestionDrm4K';

import './index.css';

const b = block('questions');

export function Questions() {
    return html`    
        <div class=${b()}>    
            <${Question4K}><//>
            <${QuestionHdr}><//>
            <${QuestionSurroundSound}><//>
            <${QuestionDrm4K}><//>
        <//>
    `;
}

