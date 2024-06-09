import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Storages } from '../../components/Storages';
import { Page } from '../Page';

export function StoragePage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Storages')}
            <//>

            <${Storages}><//>
        <//>`;
}
