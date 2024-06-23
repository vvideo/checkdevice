import { html } from 'htm/preact';
import { Page } from '../Page';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Monitor } from '../../components/Monitor';
import { ScreenDeadPixelsExample } from '../../components/ScreenDeadPixelsExample';
import { TestDeadPixels } from '../../components/TestDeadPixels';

export function TestDeadPixelsPage() {
    return html`
        <${Page}>
            <${Header}>${i18n('Test dead pixels')}<//>
            <${Monitor}><${ScreenDeadPixelsExample} //><//>
            <${TestDeadPixels} //>
        <//>`;
}
