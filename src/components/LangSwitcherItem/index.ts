import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { Link } from '../Link';

import './index.css';

interface LangSwitcherItemProps {
    emoji: string;
    name: string;
    url: string;
    selected?: boolean;
}

const b = block('lang-switcher-item');

export function LangSwitcherItem(props: LangSwitcherItemProps) {
    const { emoji, name, selected, url } = props;

    return html`<li class="${b()}">
    <${Link} theme="white" href="${url}">${emoji} ${name}${selected ? ' ✓' : ''}<//>
</li>`;
}
