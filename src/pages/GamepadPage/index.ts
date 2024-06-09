import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { GamepadList } from '../../components/GamepadList';
import { Menu } from '../Menu';

const b = block('gamepad-page');

export function GamepadPage() {
    return html`
        <div class="${b()}">
            <${Menu}><//>

            <${Header}>
                ${i18n('Gamepad')}
            <//>

            <${GamepadList}><//>

            <${Footer}><//>
        </div>`;
}
