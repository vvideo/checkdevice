import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { MainMenu } from '../../components/MainMenu';
//import { ScreenList } from '../../components/ScreenList';

const b = block('screen-page');

export function ScreenPage() {
    return html`
        <div class="${b()}">
            <${MainMenu}><//>

            <${Header}>
                ${i18n('Can I get info about my screen?')}
            <//>

            <${Footer}><//>
        </div>`;
}
