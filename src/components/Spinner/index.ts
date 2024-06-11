import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

interface SpinnerProps {
    size?: 's';
}

const b = block('spinner');

export function Spinner(props: SpinnerProps) {
    return html`<div class="${b({ size: props.size })}"></div>`;
}
