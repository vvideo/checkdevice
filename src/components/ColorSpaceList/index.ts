import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { ColorSpaceItem } from '../ColorSpaceItem';
import { colorSpaceTypes, getColorSpaceTitle } from '../../utils/getColorSpaces';

interface ColorSpaceListProps {
    items: string[] | undefined;
}

const b = block('color-space-list');

export function ColorSpaceList(props: ColorSpaceListProps) {
    if (!props.items) {
        return '';
    }

    const items = colorSpaceTypes.map(item => {
        return {
            supported: props.items!.indexOf(item) > -1,
            name: getColorSpaceTitle(item),
            type: item,
        };
    });

    return html`
        <span class="${b()}">
            ${items.map(item => {
                return html`<${ColorSpaceItem} ...${item} //>`;
            })}
        </span>`;
}