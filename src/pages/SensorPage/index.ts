import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function SensorPage() {
    return html`
        <${Page}>
            <${PageTitle}>${i18n('Sensors')}<//>
        <//>`;
}
