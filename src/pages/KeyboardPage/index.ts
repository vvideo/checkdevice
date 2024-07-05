import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { Keyboard } from '../../components/Keyboard';
import { List } from '../../components/List';

export function KeyboardPage() {
    const items = [
        [html`<a href="./keycodes.html">${i18n('Displaying key codes')}</a>`]
    ];

    return html`
        <${Page}>
            <${Header}>
                ${i18n('Testing keyboard')}
            <//>

            <${Keyboard} //>

            <${List} items="${items}" title="${i18n('Additionally')}" //>
        <//>`;
}
