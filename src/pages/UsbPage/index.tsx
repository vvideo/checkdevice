import { h } from 'preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';
import { Usb } from './components/Usb';

export function UsbPage() {
    return (
        <Page>
            <div>
                <PageTitle>{i18n('USB')}</PageTitle>
                <Usb />
            </div>
        </Page>
    );
}
