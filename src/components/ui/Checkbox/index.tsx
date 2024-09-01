import { h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

import { classname } from '../../../utils/css/classname';
import { block } from '../../../utils/css/bem';

import './index.css';

interface CheckboxProps {
    checked?: boolean;
    label: string;
    disabled?: boolean;
    class?: string;
    title?: string;
    theme?: 'active';
    onClick?: (checked: boolean) => void;
}

const b = block('checkbox');

export function Checkbox(props: CheckboxProps) {
    const [checked, setChecked] = useState(Boolean(props.checked));
    const [focus, setFocus] = useState(false);

    const ref = useRef<HTMLInputElement>(null);

    const handleClick = useCallback(() => {
        if (!ref.current || props.disabled) {
            return;
        }

        const value = !ref.current.checked;
        setChecked(value);

        props.onClick?.(value);
    }, [checked, props.disabled]);

    const className = classname(
        props.class,
        b({ checked, theme: props.theme, focus, disabled: props.disabled }),
    );

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const handleFocus = () => {
            setFocus(true);
        };

        const handleBlur = () => {
            setFocus(false);
        };

        ref.current.addEventListener('focus', handleFocus);
        ref.current.addEventListener('blur', handleBlur);

        return () => {
            if (!ref.current) {
                return;
            }

            ref.current.removeEventListener('focus', handleFocus);
            ref.current.removeEventListener('blur', handleBlur);
        };
    }, [setFocus, focus]);

    return (<label title={props.title} class={className} onClick={handleClick}>
        <input
            type="checkbox"
            disabled={props.disabled}
            ref={ref}
            class={b('input')}
            checked={checked}
        />{props.label}
    </label>);
}
