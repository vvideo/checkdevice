import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { GeoLocation } from '../../components/GeoLocation';
import { config } from '../../config';
import { PageTitle } from '../../components/PageTitle';

export function GeoPage() {
    return html`
        <${Page}>
            <${PageTitle}>
                ${i18n('Geo')}
            <//>
            <${GeoLocation} yaMapsApiKey="${config.yaMapsApiKey}" //>
        <//>`;
}
