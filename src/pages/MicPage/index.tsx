import { h } from 'preact';

import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Mic } from './components/Mic';

export function MicPage() {
    return (
        <Page title={i18n('Mic')}>
            <Mic />
        </Page>
    );
}
