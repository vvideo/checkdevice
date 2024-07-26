import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { getPagePath } from '../../utils/getPagePath';

import './index.css';

export interface MainMenuProps {
    items: MainMenuItem[];
}

export interface MainMenuItem {
    title: string;
    id: string;
    url: string;
    selected?: boolean;
    hidden?: boolean;
}

const b = block('main-menu');

export function MainMenu(props: MainMenuProps) {
    return html`
        <nav class="${b()}">
            <ul class="${b('list')}">
            ${props.items.filter(item => !item.hidden).map(item => {
                return html`<li class="${b('item', { selected: item.selected })}" key="${item.id}"><a class="${b('link')}" href="${getPagePath(item.id)}">${item.title}</a></li>`;
            })}
            </ul>
        </nav>
    `;
}
