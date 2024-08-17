import { h } from 'preact';

import { block } from '../../../../utils/css/bem';

interface KeyboardSpacerProps {
    name: string;
}

const b = block('keyboard-spacer');

export function KeyboardSpacer(props: KeyboardSpacerProps) {
    return (<div class={b({ name: props.name })}></div>);
}
