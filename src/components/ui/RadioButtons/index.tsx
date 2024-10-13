import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { block } from '../../../utils/css/bem';
import { RadioButtonProps, RadioButton } from '../RadioButton';
import { classname } from '../../../utils/css/classname';

import './index.css';

export interface RadioButtonsProps {
    className?: string;
    hideLabel?: boolean;
    label: string;
    buttons: RadioButtonProps[];
    size?: 'm' | 's';
    vertical?: boolean;
    onSelect?: (value: string) => void;
}

const b = block('radio-buttons');

export function getSelectedButton(buttons: RadioButtonProps[]) {
    const selectedButtons = buttons.filter(item => item.selected);

    return selectedButtons[0];
}

export function RadioButtons(props: RadioButtonsProps) {
    const { className, buttons, label, vertical, size, onSelect } = props;
    const selectedButton = getSelectedButton(buttons);
    const [selectedValue, setSelectedValue] = useState<string | undefined>(selectedButton ? selectedButton.value : undefined);

    const handleSelect = useCallback((value: string) => {
        setSelectedValue(value);

        if (onSelect) {
            onSelect(value);
        }
    }, [onSelect]);

    return (<fieldset class={classname(b({ vertical }), className)}>
            {label ? (<legend class={b('label', { hidden: props.hideLabel })}>{label}</legend>) : ''}
            <ul class={b('items')}>
                {
                    buttons.map(item => {
                        return (<RadioButton
                            key={item.value}
                            class={b('item')}
                            selected={item.value === selectedValue}
                            size={size}
                            title={item.title}
                            text={item.text}
                            value={item.value}
                            onClick={handleSelect}
                        />);
                    })
                }
            </ul>
        </fieldset>
    );
}
