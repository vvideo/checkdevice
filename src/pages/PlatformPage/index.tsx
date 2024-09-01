import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { Platform } from './components/Platform';
import { Permissions } from './components/Permissions';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function PlatformPage() {
    return (
        <Page title={i18n('Platform')}>
            <Platform />
            <Permissions />
        </Page>
    );
}
