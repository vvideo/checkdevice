import { h } from 'preact';
import { block } from '../../../../utils/css/bem';
import { FontItem } from '../FontItem';

interface FontsListProps {
    items: FontData[];
}

const b = block('font-list');

export function FontList(props: FontsListProps) {
    const { items } = props;

    return (<div class={b()}>
        {items.map((item, i: number) => {
            return (<FontItem key={item.fullName} family={item.family} fullName={item.fullName} style={item.style} num={i + 1} />);
        })}
    </div>);
}
