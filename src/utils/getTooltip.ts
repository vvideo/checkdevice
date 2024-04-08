import { html } from 'htm/preact';
import { i18n } from '../i18n/i18n';
import { VNode } from 'preact';

interface TooltipParams {
    file: boolean;
    mediaSource: boolean;
    contentType: string;
}

export function getTooltip(result: TooltipParams | boolean) {
    if (typeof result === 'boolean') {
        return '';
    }

    let isTypeSupportedResult: VNode | string  = result.mediaSource ? i18n('Yes') : i18n('No');
    if (!window.MediaSource) {
        isTypeSupportedResult = html`<b>unsupported</b>`;
    }

    return html`
        video.canPlayType(): ${result.file ? i18n('Yes') : i18n('No')}<br />
        MediaSource.isTypeSupported(): ${isTypeSupportedResult}<br />
        <hr />
        ${result.contentType}
    `;
}
