import { html } from 'htm/preact';
import { block } from '../../utils/css/bem';
import pages from '../../pages/pages';
import { i18nWithKeyset } from '../../i18n/i18n';
import { Link } from '../Link';
import { getPagePath } from '../../utils/getPagePath';

import './index.css';

const b = block('index-menu');

export function IndexMenu() {
    const items = pages.filter(item => !item.hidden).map(item => {
        return {
            ...item,
            title: i18nWithKeyset(item.menuTitle),
        };
    });

    return html`<nav class="${b()}">
        <ul class="${b('list')}">
        ${items.map(item => {
            return html`<li key="${item.id}" class="${b('item')}"><${Link} class="${b('link')}" theme="white" href="${getPagePath(item.id)}"><span class="${b('emoji')}">${item.emoji}</span> ${item.title}<//></li>`;
        })}
        </ul>
        <div class="${b('clear')}"></div>
    </nav>
    `;
}
