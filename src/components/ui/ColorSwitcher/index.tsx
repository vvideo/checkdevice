import { h } from 'preact';

import { block } from '../../../utils/css/bem';
import { useCallback, useState } from 'preact/hooks';
import { ColorSwitcherItem } from '../ColorSwitcherItem';

import './index.css';

interface ColorSwitcherProps {
    label?: string;
    title?: string;
    selected?: string;
    items: {
        title?: string;
        value: string;
        color: string;
    }[];
}

const b = block('color-switcher');

export function ColorSwitcher(props: ColorSwitcherProps) {
    const [ value, setValue ] = useState<string>(props.selected || props.items[0].value);

    const handleClick = useCallback((data: string) => {
        setValue(data);
    }, [setValue]);

    return (
        <div class={b()}>
            {props.label ?(<div class={b('label')} title={props.title}>{props.label}</div>) : null }
            <ul class={b('list')}>
            {props.items.map(item => {
                return (
                    <ColorSwitcherItem
                        onClick={handleClick}
                        key={item.value}
                        color={item.color}
                        title={item.title}
                        value={item.value}
                        selected={item.value === value }
                    />
                );
            })}
            </ul>
        </div>
    );
}
