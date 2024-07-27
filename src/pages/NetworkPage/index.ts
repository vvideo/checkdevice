import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';
import { NetworkInformation } from '../../components/NetworkInformation';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function NetworkPage() {
    return html`
        <${Page}>
            <${PageTitle}>${i18n('Network')}<//>
            <${NetworkInformation}><//>
        <//>`;
}
