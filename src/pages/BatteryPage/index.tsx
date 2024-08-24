import { h } from 'preact';
import { addI18nKeyset, i18n } from '../../i18n';
import { BatteryStatus } from './components/BatteryStatus';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function BatteryPage() {
    return (
        <Page title={i18n('Battery')}>
            <BatteryStatus />
        </Page>
    );
}
