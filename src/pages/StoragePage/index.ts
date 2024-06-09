import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { Menu } from '../Menu';
//import { StorageList } from '../../components/StorageList';

const b = block('storage-page');

export function StoragePage() {
    return html`
        <div class="${b()}">
            <${Menu}><//>

            <${Header}>
                ${i18n('Can I use storages?')}
            <//>

            <${Footer}><//>
        </div>`;
}
