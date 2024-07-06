import { html } from 'htm/preact';
import { groupByFamily } from '../Fonts/utils';
import { block } from '../../utils/bem';
import { FontFamilyItem } from '../FontFamilyItem';

interface FontsListHGroupedProps {
    items: FontData[];
}

const b = block('font-list-grouped');

export function FontListGrouped(props: FontsListHGroupedProps) {
    const { items } = props;

    const groupedItems = groupByFamily(items);

    return html`<div class="${b()}">
        ${groupedItems.map((item, i: number) => {
            return html`<${FontFamilyItem} key="${item.name}" name="${item.name}" items="${item.items}" num="${i + 1}" //>`;
        })}
    </div>`;
}
