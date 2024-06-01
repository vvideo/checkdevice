import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';
import { getIdFromLocation } from './utils';
import { i18n } from '../../i18n/i18n';

interface MainMenuItem {
    title: string;
    id: string;
    url: string;
    selected?: boolean;
}

const mainMenuItems: MainMenuItem[] = [
    {
        title: i18n('Video & audio'),
        id: 'index',
        url: '/',
    },
    {
        title: 'GPU',
        id: 'gpu',
        url: '/gpu.html',
    },
];

const b = block('main-menu');

export function MainMenu() {
    const id = getIdFromLocation();

    return html`
        <div class="${b()}">
            ${mainMenuItems.map(item => {
                return html`<a class="${b('item', { active: item.id === id })}" href="${item.url}">${item.title}</a>`;
            })}
        </div>
    `;
}
