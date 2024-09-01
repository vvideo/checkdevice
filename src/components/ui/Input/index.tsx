import { h } from 'preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import { block } from '../../../utils/css/bem';
import { classname } from '../../../utils/css/classname';

import './index.css';

interface InputProps {
    class?: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    title?: string;
    onKeyPress?: (event: KeyboardEvent) => void;
    onChange?: (value: string) => void;
}

const b = block('input');

export function Input(props: InputProps) {
    const className = classname(b({ disabled: props.disabled }), props.class);
    const [value, setValue] = useState<string>(props.value || '');

    const ref = useRef<HTMLInputElement>(null);

    const handleInput = useCallback(() => {
        if (!ref.current) {
            return;
        }

        const value = ref.current.value;
        setValue(value);

        props.onChange?.(value);
    }, [value, props.onChange]);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (!ref.current) {
            return;
        }

        props.onKeyPress?.(event);
    }, [value, props.onKeyPress]);

    return (<input
        class={className}
        ref={ref}
        disabled={props.disabled}
        title={props.title}
        onKeyPress={handleKeyPress}
        onInput={handleInput}
        placeholder={props.placeholder}
        value={value}
    />);
}
