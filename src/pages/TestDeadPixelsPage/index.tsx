import { h } from 'preact';

import { Page } from '../Page';
import { i18n } from '../../i18n';
import { Monitor } from '../../components/Monitor';
import { ScreenDeadPixelsExample } from '../../components/ScreenDeadPixelsExample';
import { TestDeadPixels } from './components/TestDeadPixels';

export function TestDeadPixelsPage() {
    return (
        <Page title={i18n('Test dead pixels')}>
            <div>
                <Monitor><ScreenDeadPixelsExample /></Monitor>
                <TestDeadPixels />
            </div>
        </Page>
    );
}
