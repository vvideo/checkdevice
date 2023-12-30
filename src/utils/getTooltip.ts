import { html } from 'htm/preact';

export function getTooltip(result: any, contentType: string) {
    return html`
        video.canPlayType(): ${result.file ? 'Yes' : 'No'}<br />
        MediaSource.isTypeSupported(): ${result.mediaSource ? 'Yes' : 'No'}<br />
        <hr />
        ${contentType}
    `;
}
