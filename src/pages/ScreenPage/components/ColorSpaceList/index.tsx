import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { ColorSpaceItem } from '../ColorSpaceItem';
import { colorSpaceTypes, getColorSpaceTitle } from '../../../../utils/getColorSpaces';

import './index.css';

interface ColorSpaceListProps {
    items: string[] | undefined;
}

const b = block('color-space-list');

export function ColorSpaceList(props: ColorSpaceListProps) {
    if (!props.items) {
        return null;
    }

    const items = colorSpaceTypes.map(item => {
        return {
            supported: props.items!.indexOf(item) > -1,
            name: getColorSpaceTitle(item),
            type: item,
        };
    });

    return (
        <ul class={b()}>
            {items.map(item => {
                return (<ColorSpaceItem {...item} />);
            })}
        </ul>
    );
}