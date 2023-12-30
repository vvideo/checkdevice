import { useCallback, useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { VNode } from 'preact';
import { block } from '../../utils/bem';

import './index.css';

const b = block('active-question');

interface ActiveQuestionProps {
    head: VNode;
    children: VNode;
}

export function ActiveQuestion(props: ActiveQuestionProps) {
    const [opened, setOpened] = useState(false);
    const callback = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    return html`<div class="${b({ opened })}">
        <div class="${b('head')}" onClick=${callback}>
            <div class="${b('plus')}">${opened ? '-' : '+'}</div>
            <div class="${b('question')}">${props.head}</div>
        </div>
        <div class="${b('body')}">${props.children}</div>
    </div>`;
}