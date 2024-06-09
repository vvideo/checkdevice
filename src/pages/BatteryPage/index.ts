import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { InfoLink } from '../../components/InfoLink';
import { BatteryStatus } from '../../components/BatteryStatus';
import { Menu } from '../Menu';

const b = block('battery-page');

export function BatteryPage() {
    return html`
        <div class="${b()}">
            <${Menu}><//>

            <${Header}>
                ${i18n('Can I use Battery Status API?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API"><//>
            <//>

            <${BatteryStatus}><//>

            <${Footer}><//>
        </div>`;
}
