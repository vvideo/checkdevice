import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { NetworkInformation } from '../../components/NetworkInformation';
import { Page } from '../Page';
import { GeoLocation } from '../../components/GeoLocation';
import { config } from '../../config';

export function NetworkPage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Network & geo')}
            <//>
            <${NetworkInformation}><//>
            <${GeoLocation} yaMapsApiKey="${config.yaMapsApiKey}" //>
        <//>`;
}
