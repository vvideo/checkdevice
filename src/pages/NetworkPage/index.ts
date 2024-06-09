import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { Row } from '../../components/Row';
import { InternetSpeed } from '../../components/InternetSpeed';
import { NetworkInformation } from '../../components/NetworkInformation';
import { Menu } from '../Menu';

const b = block('network-page');

export function NetworkPage() {
    return html`
        <div class="${b()}">
            <${Menu}><//>

            <${Header}>
                ${i18n('Network')}
            <//>

            <${NetworkInformation}><//>

            <${Row} name="${i18n('Internet Speed')}">
                <${InternetSpeed}><//>
            <//>

            <${Footer}><//>
        </div>`;
}
