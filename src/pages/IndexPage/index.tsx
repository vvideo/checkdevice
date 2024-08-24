import { h } from 'preact';
import { Page } from '../Page';
import { IndexMenu } from './components/IndexMenu';
import { keyset } from './i18n/keyset';
import { addI18nKeyset } from '../../i18n';

addI18nKeyset(keyset);

export function IndexPage() {
    return (
        <Page withoutMenu>
            <IndexMenu />
        </Page>
    );
}
