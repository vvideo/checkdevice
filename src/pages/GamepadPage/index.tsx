import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { GamepadList } from './components/GamepadList';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function GamepadPage() {
    return (
        <Page title={i18n('Gamepad')}>
            <GamepadList />
        </Page>
    );
}
