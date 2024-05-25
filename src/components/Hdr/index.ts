import { html } from 'htm/preact';
import { Result } from '../Result';
import { i18n } from '../../i18n/i18n';
import { InfoLink } from '../InfoLink';

interface HdrProps {
    isHdr: boolean;
    isVideoHdr: boolean;
}

export function Hdr(props: HdrProps) {
    const isHdr = Boolean(props.isHdr);
    const isVideoHdr = Boolean(props.isVideoHdr);
    // For Firefox on MacOS
    if (!isHdr && isVideoHdr) {
        return html`${i18n('Has HDR support for video?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range" //>\u00a0<${Result} value="${isVideoHdr}"><//>`;
    }

    return html`${i18n('Is this an HDR-compatible screen?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range" //>\u00a0<${Result} value="${isHdr}"><//>`;
}
