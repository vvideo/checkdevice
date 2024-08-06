import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';
import { Usb } from '../../components/Usb';

export function UsbPage() {
    return html`
        <${Page}>
            <${PageTitle}>${i18n('USB')}<//>
            <${Usb} //>
        <//>`;
}
