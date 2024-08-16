import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../../../utils/css/bem';
import { FontList } from '../FontList';

import './index.css';

interface FontFamilyItemProps {
    num: number;
    name: string;
    items: FontData[];
}

const b = block('font-family-item');

export function FontFamilyItem(props: FontFamilyItemProps) {
    const [opened, setOpened] = useState(false);

    const handleClick = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    return (<div class={b({ opened })}>
        <div class={b('value')}>
            <span class={b('switcher')} onClick={handleClick}>{props.name}</span>
            {opened ? (<div class={b('items')}><FontList items={props.items} /></div>): ''}
        </div>
    </div>);
}
