import { h } from 'preact';
import { useCallback } from 'preact/hooks';

import { block } from '../../../utils/css/bem';

import './index.css';

const b = block('color-switcher-item');

interface ColorSwitcherItemProps {
    color: string;
    title?: string;
    value: string;
    selected: boolean;

    onClick: (value: string) => void;
}

export function ColorSwitcherItem(props: ColorSwitcherItemProps) {
    const handleClick = useCallback(() => {
        props.onClick(props.value);
    }, []);

    return (<li
        class={b({ selected: props.selected })}
    >
        <div onClick={handleClick} title={props.title} class={b('color')} style={`background-color: ${props.color}`}></div>
    </li>);
}
