import { html } from 'htm/preact';
import { ScreenList } from '../../components/ScreenList';
import { Page } from '../Page';
import { i18n } from '../../i18n/i18n';
import { List } from '../../components/List';

export function ScreenPage() {
    const items = [
        [html`<a href="./test-dead-pixels.html">${i18n('Test dead pixels')}</a>`]
    ];

    return html`
        <${Page}>
            <${ScreenList}><//>

            <${List} title="${i18n('Tests')}" items="${items}" //>
        <//>`;
}
