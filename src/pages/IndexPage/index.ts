import { html } from 'htm/preact';
import { Page } from '../Page';
import { IndexMenu } from '../../components/IndexMenu';

export function IndexPage() {
    return html`
        <${Page} withoutMenu="true">
            <${IndexMenu} //>
        <//>`;
}
