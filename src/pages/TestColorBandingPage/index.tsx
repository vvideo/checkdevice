import { h } from 'preact';

import { Page } from '../Page';
import { addI18nKeyset, i18n } from '../../i18n';
import { TestColorBanding } from './components/TestColorBanding';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function TestColorBandingPage() {
    return (
        <Page title={i18n('Test color banding')}>
            <TestColorBanding />
        </Page>
    );
}
