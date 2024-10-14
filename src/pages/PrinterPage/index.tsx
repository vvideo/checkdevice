import { h } from 'preact';
import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';
import { PrintExample } from './components/PrintExample';

addI18nKeyset(keyset);

export function PrinterPage() {
    return (
        <Page title={i18n('Printer')}>
            <PrintExample />
        </Page>
    );
}
