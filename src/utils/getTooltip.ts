import { html } from 'htm/preact';
import { i18n } from '../i18n/i18n';

interface TooltipParams {
    file: boolean;
    mediaSource: boolean;
    contentType: string;
}

export function getTooltip(result: TooltipParams | boolean) {
    if (typeof result === 'boolean') {
        return '';
    }

    return html`
        video.canPlayType(): ${result.file ? i18n('Yes') : i18n('No')}<br />
        MediaSource.isTypeSupported(): ${result.mediaSource ? i18n('Yes') : i18n('No')}<br />
        <hr />
        ${result.contentType}
    `;
}
