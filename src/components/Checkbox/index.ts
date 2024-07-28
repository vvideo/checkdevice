import { html } from 'htm/preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import { classname } from '../../utils/css/classname';
import { block } from '../../utils/css/bem';

import './index.css';

interface ButtonProps {
    class?: string;
    checked: boolean;
    label: string;
    theme?: 'active';
    onClick: (checked: boolean) => void;
}

const b = block('checkbox');

export function Checkbox(props: ButtonProps) {
    const [checked, setChecked] = useState(props.checked);

    const ref = useRef<HTMLInputElement | undefined>();

    const handleClick = useCallback(() => {
        if (ref.current) {
            const value = !ref.current.checked;
            setChecked(value);
            props.onClick && props.onClick(value);
        }
    }, [checked]);

    const className = classname(
        props.class,
        b({ checked, theme: props.theme }),
    );

    return html`<label class="${className}" onClick="${handleClick}">
        <input autocomplete="off" ref="${ref}" class="${b('input')}" type="checkbox" checked="${checked}" />${props.label}
    </label>`;
}
