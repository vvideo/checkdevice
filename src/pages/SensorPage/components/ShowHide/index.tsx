import { ComponentChildren, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../../../utils/css/bem';

import './index.css';

const b = block('show-hide');

interface ShowHideProps {
    title: string;
    postfix?: string;
    description: string;
    children: ComponentChildren;
}

export function ShowHide(props: ShowHideProps) {
    const [opened, setOpened] = useState(false);
    const callback = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    return (<div class={b({ opened })}>
        <div class={b('title')} onClick={callback}>
            <div class={b('plus', { opened })}></div> {props.title}{props.postfix ? ' ' + props.postfix : ''}
        </div>
        <div class={b('content', { opened })}>
            <div class={b('description')}>{props.description}</div>
            <div class={b('body')}>{props.children}</div>
        </div>
    </div>);
}
