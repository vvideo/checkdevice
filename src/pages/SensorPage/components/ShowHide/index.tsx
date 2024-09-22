import { ComponentChildren, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../../../utils/css/bem';

import './index.css';

const b = block('show-hide');

interface ShowHideProps {
    title: string;
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
            <div class={b('plus', { opened })}></div> {props.title}
        </div>
        <div class={b('description', { opened })}>{props.description}</div>
        {
            opened ? (
                <div class={b('body')}>{props.children}</div>
            ) : null
        }
    </div>);
}
