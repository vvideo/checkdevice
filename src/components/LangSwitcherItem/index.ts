import { html } from 'htm/preact';
import { useCallback } from 'preact/hooks';
import { block } from '../../utils/css/bem';

import './index.css';

interface LangSwitcherItemProps {
    name: string;
    value: string;
    emoji: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const b = block('lang-switcher-item');

export function LangSwitcherItem(props: LangSwitcherItemProps) {
    const { emoji, onClick, name, value, selected} = props;

    const handleClick = useCallback(() => {
        onClick(value);
    }, []);

    return html`<div class="${b()}" onClick="${handleClick}">${emoji} ${name} ${selected ? ' ✓' : ''}</div>`;
}
