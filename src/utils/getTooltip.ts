import { html } from 'htm/preact';

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
        video.canPlayType(): ${result.file ? 'Yes' : 'No'}<br />
        MediaSource.isTypeSupported(): ${result.mediaSource ? 'Yes' : 'No'}<br />
        <hr />
        ${result.contentType}
    `;
}
