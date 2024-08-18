import { h } from 'preact';
import { useCallback } from 'preact/hooks';

import { classname } from '../../../utils/css/classname';
import { block } from '../../../utils/css/bem';

import './index.css';

interface ButtonProps {
    class?: string;
    children: h.JSX.Element | string;
    onClick?: () => void;
    theme?: 'active' | 'red';
    disabled?: boolean;
    size?: 's';
    title?: string;
}

const b = block('button');

export function Button(props: ButtonProps) {
    const { disabled, size, theme, onClick, title } = props;
    const className = classname(
        props.class,
        b({ theme, size, disabled }),
    );

    const handleClick = useCallback(() => {
        if (disabled) {
            return;
        }

        onClick?.();
    }, [disabled, onClick]);

    return (<button
        title={title}
        class={className}
        disabled={disabled}
        onClick={handleClick}
    >{props.children}</button>);
}
