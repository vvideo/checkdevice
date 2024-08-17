import { h } from 'preact';

import { i18n } from '../../i18n';
import { NetworkInformation } from './components/NetworkInformation';
import { Page } from '../Page';

export function NetworkPage() {
    return (
        <Page title={i18n('Network')}>
            <NetworkInformation />
        </Page>
    );
}
