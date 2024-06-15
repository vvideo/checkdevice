import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { NetworkInformation } from '../../components/NetworkInformation';
import { Page } from '../Page';

export function NetworkPage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Network')}
            <//>

            <${NetworkInformation}><//>
        <//>`;
}
