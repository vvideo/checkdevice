import { html } from 'htm/preact';
import { useCallback } from 'preact/hooks';
import { VNode } from 'preact';
import { classname } from '../../utils/css/classname';
import { block } from '../../utils/css/bem';

import './index.css';

interface ButtonProps {
    class?: string;
    children: VNode | string;
    onClick?: () => void;
    theme?: 'active' | 'red';
    disabled?: boolean;
    size?: 's';
}

const b = block('button');

export function Button(props: ButtonProps) {
    const { disabled, size, theme, onClick } = props;
    const className = classname(
        props.class,
        b({ theme, size, disabled }),
    );

    const handleClick = useCallback(() => {
        if (disabled) {
            return;
        }

        onClick && onClick();
    }, [disabled, onClick]);

    return html`<button class="${className}" disabled="${disabled}" onClick="${handleClick}">${props.children}</button>`;
}
