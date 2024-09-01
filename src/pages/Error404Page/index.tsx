import { h } from 'preact';
import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { Link } from '../../components/ui/Link';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function Error404Page() {
    return (
        <Page title="404">
            <p>{i18n('Page not found.')}</p>
            <p><Link href="/">{i18n('Go to main page')}</Link></p>
        </Page>
    );
}
