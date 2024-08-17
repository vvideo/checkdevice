import { h } from 'preact';
import { Page } from '../Page';
import { IndexMenu } from './components/IndexMenu';

export function IndexPage() {
    return (
        <Page withoutMenu>
            <IndexMenu />
        </Page>
    );
}
