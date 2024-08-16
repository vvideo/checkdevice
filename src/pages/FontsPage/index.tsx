import { h } from 'preact';

import { i18n } from '../../i18n';
import { Fonts } from './components/Fonts';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function FontsPage() {
    return (
        <Page>
            <div>
                <PageTitle>{i18n('Local fonts')}</PageTitle>
                <Fonts />
            </div>
        </Page>
    );
}
