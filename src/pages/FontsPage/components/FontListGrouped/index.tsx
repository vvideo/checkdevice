import { h } from 'preact';

import { groupByFamily } from '../Fonts/utils';
import { block } from '../../../../utils/css/bem';
import { FontFamilyItem } from '../FontFamilyItem';

interface FontsListHGroupedProps {
    items: FontData[];
}

const b = block('font-list-grouped');

export function FontListGrouped(props: FontsListHGroupedProps) {
    const { items } = props;

    const groupedItems = groupByFamily(items);

    return (<div class={b()}>
        {groupedItems.map((item, i: number) => {
            return (<FontFamilyItem key={item.name} name={item.name} items={item.items} num={i + 1} />);
        })}
    </div>);
}
