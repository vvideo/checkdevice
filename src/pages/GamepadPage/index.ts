import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { InfoLink } from '../../components/InfoLink';
import { GamepadList } from '../../components/GamepadList';
import { Menu } from '../Menu';

const b = block('gamepad-page');

export function GamepadPage() {
    return html`
        <div class="${b()}">
            <${Menu}><//>

            <${Header}>
                ${i18n('Can I use 🎮 Gamepad API?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API"><//>
            <//>

            <${GamepadList}><//>

            <${Footer}><//>
        </div>`;
}
