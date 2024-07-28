import { calcAspectRatio } from 'calc-aspect-ratio';
import { html } from 'htm/preact';
import { hasZoom } from '../../utils/hasZoom';
import { i18n } from '../../i18n';
import { prepareColorSpaces } from '../../utils/getColorSpaces';
import { getChecked } from '../../utils/getChecked';
import { block } from '../../utils/css/bem';

import './index.css';

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

const b = block('screen-badge-details');

export function ScreenBadgeDetails(props: ScreenBadgeDetailsProps) {
    const screenSize = props.withDevicePixelRatio ?
        [props.width, props.height, props.devicePixelRatio] :
        [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio];

    return html`
        <div class="${b()}">
            <div>${i18n('Size')}: ${screenSize.join('×')}</div>
            <div>${i18n('Aspect ratio')}: ${calcAspectRatio(Math.floor(props.width), Math.floor(props.height)).value}</div>
            ${hasZoom() ? html`<div>⚠ ${i18n('Please reset zoom in the page')}</div>` : ''}
            <div>${i18n('Color depth')}: ${props.colorDepth} ${i18n('bit')}</div>
            <div>${props.colorSpaces && props.colorSpaces.length ? prepareColorSpaces(props.colorSpaces) : ''}</div>
            ${typeof props.isPrimary === 'undefined' ? '' : html`<div>${i18n('Primary')}: ${getChecked(props.isPrimary)}</div>`}
            ${typeof props.isInternal === 'undefined' ? '' : html`<div>${i18n('Internal')}: ${getChecked(props.isInternal)}</div>`}
        </div>
    `;
}