import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';
import { Bluetooth } from './components/Bluetooth';

addI18nKeyset(keyset);

export function BluetoothPage() {
    return ( 
        <Page title={i18n('Bluetooth')}>
            <Bluetooth />
        </Page>
    );
}
