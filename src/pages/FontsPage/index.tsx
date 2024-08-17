import { h } from 'preact';

import { i18n } from '../../i18n';
import { Fonts } from './components/Fonts';
import { Page } from '../Page';

export function FontsPage() {
    return (
        <Page title={i18n('Local fonts')}>
            <Fonts />
        </Page>
    );
}
