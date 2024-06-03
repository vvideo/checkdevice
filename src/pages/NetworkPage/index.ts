import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { InfoLink } from '../../components/InfoLink';
import { MainMenu } from '../../components/MainMenu';
import { Row } from '../../components/Row';
import { InternetSpeed } from '../../components/InternetSpeed';
import { NetworkInformation } from '../../components/NetworkInformation';

const b = block('network-page');

export function NetworkPage() {
    return html`
        <div class="${b()}">
            <${MainMenu}><//>

            <${Header}>
                ${i18n('Can I use Network Information API?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>
            <//>

            <${NetworkInformation}><//>

            <${Row} name="${i18n('Internet Speed')}">
                <${InternetSpeed}><//>
            <//>

            <${Footer}><//>
        </div>`;
}
