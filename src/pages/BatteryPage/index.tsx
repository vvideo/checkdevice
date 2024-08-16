import { h } from 'preact';
import { PageTitle } from '../../components/PageTitle';
import { i18n } from '../../i18n';
import { BatteryStatus } from './components/BatteryStatus';
import { Page } from '../Page';

export function BatteryPage() {
    return (
        <Page>
            <div>
                <PageTitle>
                    {i18n('Battery')}
                </PageTitle>

                <BatteryStatus />
            </div>
        </Page>)
    ;
}
