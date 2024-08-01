import { html } from 'htm/preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import { block } from '../../utils/css/bem';
import { classname } from '../../utils/css/classname';

import './index.css';

interface InputProps {
    class?: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    title?: string;
}

const b = block('input');

export function Input(props: InputProps) {
    const className = classname(b(), props.class);
    const [value, setValue] = useState<string>(props.value || '');

    const ref = useRef<HTMLInputElement>();

    const handleInput = useCallback(() => {
        if (!ref.current) {
            return;
        }

        const value = ref.current.value;
        setValue(value);
        props.onChange && props.onChange(value);
    }, [value, props.onChange]);

    return html`<input ref="${ref}" title="${props.title}" class="${className}" onInput="${handleInput}" placeholder="${props.placeholder}" value="${value}" />`
}
