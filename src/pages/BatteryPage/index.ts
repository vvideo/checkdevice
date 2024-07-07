import { html } from 'htm/preact';
import { PageTitle } from '../../components/PageTitle';
import { i18n } from '../../i18n/i18n';
import { BatteryStatus } from '../../components/BatteryStatus';
import { Page } from '../Page';

export function BatteryPage() {
    return html`
        <${Page}}>
            <${PageTitle}>
                ${i18n('Battery')}
            <//>

            <${BatteryStatus}><//>
        <//>`;
}
