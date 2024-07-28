import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { GamepadList } from '../../components/GamepadList';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function GamepadPage() {
    return html`
        <${Page}>
            <${PageTitle}}>
                ${i18n('Gamepad')}
            <//>

            <${GamepadList}><//>
        <//>`;
}
