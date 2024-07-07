import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { Keyboard } from '../../components/Keyboard';
import { List } from '../../components/List';
import { Link } from '../../components/Link';
import { PageTitle } from '../../components/PageTitle';

export function KeyboardPage() {
    const items = [
        [html`<${Link} href="./keycodes.html">${i18n('Displaying key codes')}<//>`]
    ];

    return html`
        <${Page}>
            <${PageTitle}>
                ${i18n('Testing keyboard')}
            <//>

            <${Keyboard} //>

            <${List} items="${items}" title="${i18n('Additionally')}" //>
        <//>`;
}
