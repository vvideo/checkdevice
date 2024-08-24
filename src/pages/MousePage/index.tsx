import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { Mouse } from './components/Mouse';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function MousePage() {
    return (
        <Page title={i18n('Testing mouse')}>
            <Mouse />
        </Page>
    );
}
