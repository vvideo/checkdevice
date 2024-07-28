import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Storages } from '../../components/Storages';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function StoragePage() {
    return html`
        <${Page}>
            <${PageTitle}>
                ${i18n('Storages')}
            <//>

            <${Storages}><//>
        <//>`;
}
