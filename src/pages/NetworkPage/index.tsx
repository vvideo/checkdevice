import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { NetworkInformation } from './components/NetworkInformation';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function NetworkPage() {
    return (
        <Page title={i18n('Network')}>
            <NetworkInformation />
        </Page>
    );
}
