import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { getIdFromLocation } from './utils';
import { items } from './items';

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

export function MainMenu() {
    const id = getIdFromLocation();

    return html`
        <div class="${b()}">
            ${items.filter(item => !item.hidden).map(item => {
                return html`<a class="${b('item', { active: item.id === id })}" href="${item.url}">${item.title}</a>`;
            })}
        </div>
    `;
}
