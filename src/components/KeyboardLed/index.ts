import { html } from 'htm/preact';
import { block } from '../../utils/bem';

interface KeyboardLedProps {
    code: string;
    on: boolean;
}

const b = block('keyboard-led');

export function KeyboardLed(props: KeyboardLedProps) {
    return html`<div class="${b({ on: props.on, code: props.code })}"></div>`;
}
