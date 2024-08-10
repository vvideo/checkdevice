import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Storage } from '../../components/Storage';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function StoragePage() {
    return html`
        <${Page}>
            <${PageTitle}>
                ${i18n('Storage')}
            <//>

            <${Storage}><//>
        <//>`;
}
