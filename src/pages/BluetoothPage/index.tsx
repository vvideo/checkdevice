import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function BluetoothPage() {
    return ( 
        <Page title={i18n('Bluetooth')}>
            <span></span>
        </Page>
    );
}
