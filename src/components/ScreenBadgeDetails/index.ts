import { calcAspectRatio } from 'calc-aspect-ratio';
import { html } from 'htm/preact';
import { hasZoom } from '../../utils/hasZoom';
import { i18n } from '../../i18n/i18n';
import { prepareColorSpaces } from '../../utils/getColorSpaces';

interface ScreenBadgeDetailsProps {
    width: number;
    height: number;
    colorDepth: number;
    devicePixelRatio: number;
    withDevicePixelRatio: boolean;
    colorSpaces?: string[];
    isPrimary?: boolean;
    isInternal?: boolean;
}

export function ScreenBadgeDetails(props: ScreenBadgeDetailsProps) {
    const screenSize = props.withDevicePixelRatio ?
        [props.width, props.height, props.devicePixelRatio] :
        [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio];

    return html`
        <div>
            <div>${i18n('Size')}: ${screenSize.join('×')}</div>
            <div>${i18n('Aspect ratio')}: ${calcAspectRatio(Math.floor(props.width), Math.floor(props.height)).value}</div>
            ${hasZoom() ? html`<div>⚠ ${i18n('Please reset zoom in the page')}</div>` : ''}
            <div>${i18n('Color depth')}: ${props.colorDepth} ${i18n('bit')}</div>
            <div>${props.colorSpaces && props.colorSpaces.length ? prepareColorSpaces(props.colorSpaces) : ''}</div>
            ${props.isPrimary ? html`<div>${i18n('Primary')}: ${i18n('Yes')}</div>` : ''}
            ${props.isInternal ? html`<div>${i18n('Internal')}: ${i18n('Yes')}</div>` : ''}
        </div>
    `;
}