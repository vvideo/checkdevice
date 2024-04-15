import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';
import { getI18nLang } from '../../i18n/i18n';

const b = block('network-speed');

export function NetworkSpeed() {
    return html`<ul class="${b()}">
        <li><a href="https://speedtest.net" target="_blank">Speedtest</a></li>
        <li><a href="https://fast.com" target="_blank">Fast</a></li>
        ${getI18nLang() === 'ru' ? html`<li><a href="https://ya.ru/internet" target="_blank">Интернетометр</a></li>` : ''}
    </ul>`;
}
