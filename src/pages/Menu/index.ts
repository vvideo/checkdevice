import { html } from 'htm/preact';
import { MainMenu, MainMenuItem } from '../../components/MainMenu';
import pages from '../pages';
import { i18nWithKeyset } from '../../i18n/i18n';
import { isSsr } from '../../utils/isSsr';
import { getPagePath } from '../../utils/getPagePath';

export function getIdFromLocation() {
    const id = window.location.pathname.split(/[?./]/)[2];
    return id;
}

export function Menu() {
    const id = isSsr ? '' : getIdFromLocation();
    const items: MainMenuItem[] = pages.map(item => {
        const selected = item.id === id;

        return {
            ...item,
            url: getPagePath(item.id),
            title: i18nWithKeyset(item.menuTitle),
            selected,
        };
    });

    return html`<${MainMenu} items="${items}"><//>`;
}
