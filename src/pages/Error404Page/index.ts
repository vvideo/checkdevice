import { html } from 'htm/preact';
import { PageTitle } from '../../components/PageTitle';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { Link } from '../../components/Link';

export function Error404Page() {
    return html`
        <${Page}>
            <${PageTitle}>404<//>

            <p>${i18n('Page not found.')}</p>
            <p><${Link} href="/">${i18n('Go to main page')}><//></p>
        <//>`;
}
