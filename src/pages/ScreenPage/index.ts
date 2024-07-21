import { html } from 'htm/preact';
import { ScreenList } from '../../components/ScreenList';
import { Page } from '../Page';
import { i18n } from '../../i18n/i18n';
import { List } from '../../components/List';
import { Link } from '../../components/Link';
import { getPagePath } from '../../utils/getPagePath';

export function ScreenPage() {
    const items = [
        [html`<${Link} href="${getPagePath('test-dead-pixels')}">${i18n('Test dead pixels')}<//>`]
    ];

    return html`
        <${Page}>
            <${ScreenList}><//>

            <${List} title="${i18n('Tests')}" items="${items}" //>
        <//>`;
}
