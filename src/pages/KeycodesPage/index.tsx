import { h } from 'preact';
import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { Keycode } from './components/Keycode';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function KeycodesPage() {
    return (
        <Page title={i18n('Displaying key codes')}>
            <Keycode />
        </Page>
    );
}
