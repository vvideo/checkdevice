import { h } from 'preact';
import { i18n } from '../../i18n';
import { BatteryStatus } from './components/BatteryStatus';
import { Page } from '../Page';

export function BatteryPage() {
    return (
        <Page title={i18n('Battery')}>
            <BatteryStatus />
        </Page>
    );
}
