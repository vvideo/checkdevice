import { h } from 'preact';
import { useCallback } from 'preact/hooks';
import { block } from '../../../utils/css/bem';
import { classname } from '../../../utils/css/classname';

import './index.css';

export interface RadioButtonProps {
    text: string;
    value: string;
    selected?: boolean;
    title?: string;
    class?: string;
    onClick?: (value: string) => void;
}

const b = block('radio-button');

export function RadioButton(props: RadioButtonProps) {
    const handleClick = useCallback(() => {
        props.onClick?.(props.value);
    }, [props.onClick]);

    const className = classname(b({ selected: props.selected }), props.class);

    return (<li title={props.title} class={className} onClick={handleClick} key={props.value}>{props.text}</li>);
}
