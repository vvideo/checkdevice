import { h } from 'preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Link } from '../../components/ui/Link';

export function Error404Page() {
    return (
        <Page title="404">
            <div>
                <p>{i18n('Page not found.')}</p>
                <p><Link href="/">{i18n('Go to main page')}</Link></p>
            </div>
        </Page>
    );
}
