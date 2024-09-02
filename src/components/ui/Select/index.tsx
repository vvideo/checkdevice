import { h } from 'preact';
import { useCallback, useRef } from 'preact/hooks';

import { block } from '../../../utils/css/bem';

import './index.css';
import { classname } from '../../../utils/css/classname';

const b = block('select');

export interface SelectOption {
    title: string;
    value: string;
}

export interface SelectProps {
    options: SelectOption[];
    theme?: 'active'
    disabled?: boolean;
    value?: string;
    class?: string;
    onChange?: (value: string) => void;
}

export function Select(props: SelectProps) {
    const refSelect = useRef<HTMLSelectElement>(null);

    const handleChange = useCallback(() => {
        if (!refSelect.current) {
            return;
        }

        props.onChange?.(refSelect.current.value);
    }, []);

    const cl = classname(b({ theme: props.theme, disabled: props.disabled }), props.class);

    return (
        <select ref={refSelect} class={cl} onChange={handleChange}>
            {props.options.map(item => {
                return (<option value={item.value} selected={item.value === props.value}>{item.title}</option>);
            })}
        </select>
    );
}
