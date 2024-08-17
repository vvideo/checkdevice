import { h } from 'preact';
import { block } from '../../utils/css/bem';
import { classname } from '../../utils/css/classname';

import './index.css';

interface NavListProps {
    class?: string;
    items: h.JSX.Element[][];
}

const b = block('nav-list');

export function NavList(props: NavListProps) {
    const filteredItems = props.items.filter(item => Boolean(item));
    const className = classname(props.class, b());

    return filteredItems.length ? (
        <nav class={className}>
            <ul class={b('list')}>
                {filteredItems.map(item => (<li>{item}</li>))}
            </ul>
        </nav>) : null;
}
