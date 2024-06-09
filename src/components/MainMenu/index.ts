import { html } from 'htm/preact';
import { block } from '../../utils/bem';

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
        <div class="${b()}">
            ${props.items.filter(item => !item.hidden).map(item => {
                return html`<a class="${b('item', { selected: item.selected })}" href="${item.url}">${item.title}</a>`;
            })}
        </div>
    `;
}
