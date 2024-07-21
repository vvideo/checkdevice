import { html } from 'htm/preact';
import { block } from '../../utils/bem';
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

    return html`<div class="${b()}">
        ${items.map(item => {
            return html`<${Link} theme="white" class="${b('item')}" href="${getPagePath(item.id)}"><span class="${b('emoji')}">${item.emoji}</span>${item.title}<//>`;
        })}
        <div class="${b('clear')}"></div>
    </div>
    `;
}
