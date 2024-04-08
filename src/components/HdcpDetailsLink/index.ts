import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';

export function HdcpDetailsLink() {
    return html`<a href="https://vvideo.github.io/hdcp/index.html" target="_blank">${i18n('Details')}</a>`;
}
