import { html } from 'htm/preact';
import { ScreenList } from '../../components/ScreenList';
import { Page } from '../Page';

export function ScreenPage() {
    return html`
        <${Page}>
            <${ScreenList}><//>
        <//>`;
}
