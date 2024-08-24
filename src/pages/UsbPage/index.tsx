import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { Usb } from './components/Usb';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function UsbPage() {
    return (
        <Page title={i18n('USB')}>
            <Usb />
        </Page>
    );
}
