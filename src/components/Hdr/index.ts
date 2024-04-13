import { html } from 'htm/preact';
import { Result } from '../Result';
import { i18n } from '../../i18n/i18n';
import { InfoLink } from '../InfoLink';

interface HdrProps {
    isHdr: boolean;
    isVideoHdr: boolean;
}

export function Hdr(props: HdrProps) {
    // For Firefox on MacOS
    if (!props.isHdr && props.isVideoHdr) {
        return html`${i18n('Has HDR support for video?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range" //> <${Result} value="${props.isVideoHdr}"><//>`;
    }

    return html`${i18n('Is this a HDR-compatible screen?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range" //> <${Result} value="${props.isHdr}"><//>`;
}
