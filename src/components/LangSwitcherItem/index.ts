import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { Link } from '../Link';

import './index.css';
import { LangIcon } from '../LangIcon';

interface LangSwitcherItemProps {
    emoji: string;
    name: string;
    value: string;
    url: string;
    selected?: boolean;
}

const b = block('lang-switcher-item');

export function LangSwitcherItem(props: LangSwitcherItemProps) {
    const { value, name, selected, url } = props;

    return html`<li class="${b()}">
    <${Link} theme="white" href="${url}"><${LangIcon} lang="${value}" //> ${name}${selected ? ' ✓' : ''}<//>
</li>`;
}
