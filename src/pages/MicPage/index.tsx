import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { Mic } from './components/Mic';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function MicPage() {
    return (
        <Page title={i18n('Mic')}>
            <Mic />
        </Page>
    );
}
