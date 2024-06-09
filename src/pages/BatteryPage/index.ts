import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { BatteryStatus } from '../../components/BatteryStatus';
import { Menu } from '../Menu';

const b = block('battery-page');

export function BatteryPage() {
    return html`
        <div class="${b()}">
            <${Menu}><//>

            <${Header}>
                ${i18n('Battery')}
            <//>

            <${BatteryStatus}><//>

            <${Footer}><//>
        </div>`;
}
