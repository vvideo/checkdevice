import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { RadioButtonProps, RadioButton } from '../RadioButton';
import { classname } from '../../utils/classname';

import './index.css';

export interface RadioButtonsProps {
    className?: string;
    label: string;
    buttons: RadioButtonProps[];
    onSelect(value: string): void;
}

const b = block('radio-buttons');

export function getSelectedButton(buttons: RadioButtonProps[]) {
    const selectedButtons = buttons.filter(item => item.selected);

    return selectedButtons[0];
}

export function RadioButtons(props: RadioButtonsProps) {
    const { className, buttons, label, onSelect } = props;
    const selectedButton = getSelectedButton(buttons);
    const [selectedValue, setSelectedValue] = useState<string | undefined>(selectedButton ? selectedButton.value : undefined);

    const handleSelect = useCallback((value: string) => {
        setSelectedValue(value);
        onSelect(value);
    }, [onSelect]);

    return html`
        <div class="${classname(b(), className)}">
            <div class="${b('label')}">${label}</div>
            <div class="${b('items')}">
                ${
                    buttons.map(item => {
                        return html`<${RadioButton}
                            key="${item.value}"
                            class="${b('item')}"
                            selected="${item.value === selectedValue}"
                            text="${item.text}"
                            value="${item.value}"
                            onClick="${handleSelect}"
                        ><//>`;
                    })
                }
            </div>
        </div>
    `;
}
