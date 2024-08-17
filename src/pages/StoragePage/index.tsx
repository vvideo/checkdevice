import { h } from 'preact';

import { i18n } from '../../i18n';
import { Storage } from './components/Storage';
import { Page } from '../Page';

export function StoragePage() {
    return (
        <Page title={i18n('Storage')}>
            <Storage />
        </Page>
    );
}
