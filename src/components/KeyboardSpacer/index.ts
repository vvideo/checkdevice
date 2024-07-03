import { html } from 'htm/preact';
import { block } from '../../utils/bem';

interface KeyboardSpacerProps {
    name: string;
}

const b = block('keyboard-spacer');

export function KeyboardSpacer(props: KeyboardSpacerProps) {
    return html`<div class="${b({ name: props.name })}"></div>`;
}
