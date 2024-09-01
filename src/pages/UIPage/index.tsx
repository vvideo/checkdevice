import { h } from 'preact';

import { Page } from '../Page';
import { UIList } from './components/UIList';

export function UIPage() {
    return (
        <Page title="UI">
            <UIList />
        </Page>
    );
}
