import { h } from 'preact';

import { i18n } from '../../i18n';
import { GamepadList } from './components/GamepadList';
import { Page } from '../Page';

export function GamepadPage() {
    return (
        <Page title={i18n('Gamepad')}>
            <GamepadList />
        </Page>
    );
}
