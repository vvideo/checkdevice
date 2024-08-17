import { h } from 'preact';

import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Mouse } from './components/Mouse';

export function MousePage() {
    return (
        <Page title={i18n('Testing mouse')}>
            <Mouse />
        </Page>
    );
}
