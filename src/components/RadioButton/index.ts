import { html } from 'htm/preact';
import { useCallback } from 'preact/hooks';
import { block } from '../../utils/bem';

import './index.css';

export interface RadioButtonProps {
    text: string;
    value: string;
    selected?: boolean;
    onClick?: (value: string) => void;
}

const b = block('radio-button');

export function RadioButton(props: RadioButtonProps) {
    const handleClick = useCallback(() => {
        props.onClick?.(props.value);
    }, [props.onClick]);

    return html`
        <span
            class="${b({ selected: props.selected })}"
            onClick="${handleClick}"
            key="${props.value}"
        >${props.text}</span>
    `;
}
