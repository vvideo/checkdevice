import { h } from 'preact';

import { Page } from '../Page';
import { addI18nKeyset, i18n } from '../../i18n';
import { Monitor } from '../ScreenPage/components/Monitor';
import { ScreenDeadPixelsExample } from './components/ScreenDeadPixelsExample';
import { TestDeadPixels } from './components/TestDeadPixels';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function TestDeadPixelsPage() {
    return (
        <Page title={i18n('Test dead pixels')}>
            <Monitor><ScreenDeadPixelsExample /></Monitor>
            <TestDeadPixels />
        </Page>
    );
}
