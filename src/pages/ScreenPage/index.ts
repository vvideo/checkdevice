import '../common';

import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { Menu } from '../Menu';
import { ScreenList } from '../../components/ScreenList';

const b = block('screen-page');

export function ScreenPage() {
    return html`
        <div class="${b()}">
            <${Menu}><//>

            <${ScreenList}><//>

            <${Footer}><//>
        </div>`;
}
