import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';

export function Error404Page() {
    return html`
        <${Page}>
            <${Header}>404<//>

            <p>${i18n('Page not found.')}</p>
            <p><a href="/">${i18n('Go to main page')}</a></p>
        <//>`;
}
