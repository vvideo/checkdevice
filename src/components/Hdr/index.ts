import { html } from 'htm/preact';
import { Result } from '../Result';
import { i18n } from '../../i18n/i18n';

interface HdrProps {
    isHdr: boolean;
    isVideoHdr: boolean;
}

export function Hdr(props: HdrProps) {
    // For Firefox on MacOS
    if (!props.isHdr && props.isVideoHdr) {
        return html`${i18n('Has HDR support for video?')} <${Result} value="${props.isVideoHdr}"><//>`;
    }

    return html`${i18n('Is this a HDR-compatible screen?')} <${Result} value="${props.isHdr}"><//>`;
}
