import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import { classname } from '../../utils/css/classname';
import { VNode } from 'preact';

import './index.css';

interface NavListProps {
    class?: string;
    items: VNode[];
}

const b = block('nav-list');

export function NavList(props: NavListProps) {
    const filteredItems = props.items.filter(item => Boolean(item));
    const className = classname(props.class, b());

    return filteredItems.length ? html`
        <nav class="${className}">
            <ul class="${b('list')}">
                ${filteredItems.map(item => html`<li>${item}</li>`)}
            </ul>
        </nav>` : '';
}
