import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';

import './index.css';

interface LangIconProps {
    lang: string;
}

const b = block('lang-icon');

export function LangIcon(props: LangIconProps) {
    return html`<span class="${b({ lang: props.lang })}"></span>`;
}
