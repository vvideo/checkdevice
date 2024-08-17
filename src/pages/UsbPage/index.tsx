import { h } from 'preact';

import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Usb } from './components/Usb';

export function UsbPage() {
    return (
        <Page title={i18n('USB')}>
            <Usb />
        </Page>
    );
}
