import { html } from 'htm/preact';
import { calcAspectRatio } from 'calc-aspect-ratio';
import { List } from '../List';
import { getChecked } from '../../utils/getChecked';
import { i18n } from '../../i18n/i18n';
import { block } from '../../utils/bem';
import { WarningMessage } from '../WarningMessage';
import { HdrLabel } from '../HdrLabel';
import { ColorSpaceList } from '../ColorSpaceList';

import './index.css';

export interface ScreenItemProps {
    index: number;
    width: number;
    height: number;
    devicePixelRatio: number;
    colorDepth: number;
    isHdr?: boolean;
    colorSpaces?: string[];
    orientation?: ScreenOrientation;
    isInternal?: boolean;
    isPrimary?: boolean;
    label?: string;
    isExtended?: boolean;
}

const b = block('screen-item');

export function ScreenItem(props: ScreenItemProps) {
    const {
        width,
        height,
        devicePixelRatio,
        colorDepth,
        colorSpaces,
        isHdr,
        isInternal,
        isPrimary,
        label,
    } = props;

    const logicalSize = [width, height, devicePixelRatio];
    const realSize = [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio];

    const items = [
        [i18n('Size'), `${realSize.join('×')} (${logicalSize.join('×')})`],
        [i18n('Aspect ratio'), calcAspectRatio(Math.max(width, height), Math.min(width, height)).value],
        props.orientation ? [i18n('Orientation'), props.orientation?.type] : '',
        [i18n('Color depth'), `${colorDepth} ${i18n('bit')}`],
        [html`<${HdrLabel} enabled="${isHdr}" //>`, getChecked(Boolean(isHdr))],
        [i18n('Color spaces'), html`<${ColorSpaceList} items="${colorSpaces}" //>`],
        typeof isPrimary === 'undefined' ? '' : [i18n('Primary'), getChecked(Boolean(isPrimary))],
        typeof isInternal === 'undefined' ? '' : [i18n('Internal'), getChecked(Boolean(isInternal))],
    ].filter(Boolean);

    return html`
        <div class="${b()}">
            ${label ? html`<div class="${b('label')}">${label}</div>` : ''}
            <${List} items="${items}"><//>

            ${props.isExtended === true ? html`<${WarningMessage}>${i18n('Additional monitor detected')}<//>` : ''}
        </div>
    `;
}
