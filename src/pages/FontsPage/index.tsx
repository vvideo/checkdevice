import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Fonts } from './components/Fonts';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function FontsPage() {
    return (
        <Page title={i18n('Local fonts')}>
            <Fonts />
        </Page>
    );
}
