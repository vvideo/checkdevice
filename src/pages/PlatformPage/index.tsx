import { h } from 'preact';

import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Platform } from './components/Platform';
import { Permissions } from './components/Permissions';

export function PlatformPage() {
    return (
        <Page title={i18n('Platform')}>
            <div>
                <Platform />
                <Permissions />
            </div>
        </Page>
    );
}
