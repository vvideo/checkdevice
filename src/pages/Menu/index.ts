import { html } from 'htm/preact';
import { MainMenu, MainMenuItem } from '../../components/MainMenu';
import pages from '../pages';
import { i18nWithKeyset } from '../../i18n/i18n';

export function getIdFromLocation() {
    const id = window.location.pathname
        // Fix for github pages
        .replace(/^\/caniwatchvideo/, '')
        .split(/[?./]/)[1];

    return id ? id : 'index';
}

export function Menu() {
    const id = getIdFromLocation();
    const items: MainMenuItem[] = pages.map(item => {
        const selected = item.id === id;
        if (selected) {
            document.title = i18nWithKeyset(item.header || item.menuTitle)
        }

        return {
            ...item,
            title: i18nWithKeyset(item.menuTitle),
            selected,
        };
    });

    return html`<${MainMenu} items="${items}"><//>`;
}
