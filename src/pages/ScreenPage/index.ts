import { html } from 'htm/preact';
import { ScreenList } from '../../components/ScreenList';
import { Page } from '../Page';
import { i18n } from '../../i18n';
import { Link } from '../../components/ui/Link';
import { getPagePath } from '../../utils/getPagePath';
import { ExtLink } from '../../components/ui/ExtLink';
import { NavList } from '../../components/NavList';
import { Section } from '../../components/ui/Section';

export function ScreenPage() {
    const items = [
        [html`<${Link} href="${getPagePath('test-dead-pixels')}">${i18n('Test dead pixels')}<//>`],
        [html`<${ExtLink} target="_blank" href="https://vvideo.github.io/hdcp/index.html">${i18n('Check HDCP version')}<//>`],
    ];

    return html`
        <${Page}>
            <${ScreenList}><//>

            <${Section} name="${i18n('Tests')}">
                <${NavList} items="${items}" //>
            <//>
        <//>`;
}
