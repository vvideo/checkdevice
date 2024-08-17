import { h } from 'preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Keycode } from './components/Keycode';

export function KeycodesPage() {
    return (
        <Page title={i18n('Displaying key codes')}>
            <Keycode />
        </Page>
    );
}
