import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Storage } from './components/Storage';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function StoragePage() {
    return (
        <Page title={i18n('Storage')}>
            <Storage />
        </Page>
    );
}
