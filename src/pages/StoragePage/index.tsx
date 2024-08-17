import { h } from 'preact';
import { i18n } from '../../i18n';
import { Storage } from './components/Storage';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function StoragePage() {
    return (
        <Page>
            <div>
                <PageTitle>
                    {i18n('Storage')}
                </PageTitle>
                <Storage />
            </div>
        </Page>
    );
}
