import { html } from 'htm/preact';
import { Page } from '../Page';
import { i18n } from '../../i18n';
import { Monitor } from '../../components/Monitor';
import { ScreenDeadPixelsExample } from '../../components/ScreenDeadPixelsExample';
import { TestDeadPixels } from './components/TestDeadPixels';
import { PageTitle } from '../../components/PageTitle';

export function TestDeadPixelsPage() {
    return html`
        <${Page}>
            <${PageTitle}>${i18n('Test dead pixels')}<//>
            <${Monitor}><${ScreenDeadPixelsExample} //><//>
            <${TestDeadPixels} //>
        <//>`;
}
