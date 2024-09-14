import { h } from 'preact';
import { calcAspectRatio } from 'calc-aspect-ratio';

import { DescriptionList } from '../../../../components/DescriptionList';
import { getChecked } from '../../../../utils/string/getChecked';
import { i18n } from '../../../../i18n';
import { block } from '../../../../utils/css/bem';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { HdrLabel } from '../HdrLabel';
import { ColorSpaceList } from '../ColorSpaceList';
import { needAdditionalMonitorWarning } from '../../../../lib/ScreenInfo';

import './index.css';

export interface ScreenItemProps {
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
    maxTouchPoints?: number;
    isScreenDetailed?: boolean;
}

const b = block('screen-item');

const EMPTY_ITEM: [string, string] = ['', ''];

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
        maxTouchPoints,
        orientation,
    } = props;

    const logicalSize = [width, height];
    const realSize = [width * devicePixelRatio, height * devicePixelRatio];

    let items: [string | h.JSX.Element, string | h.JSX.Element | number][] = [
        [i18n('Actual size'), realSize.join('×')],
        [i18n('Logical size'), logicalSize.join('×')],
        [i18n('Device pixel ratio'), devicePixelRatio],
        [i18n('Aspect ratio'), calcAspectRatio(Math.max(width, height), Math.min(width, height)).value],
        orientation ? [i18n('Orientation'), i18n(orientation.type)] : ['', ''],
        [i18n('Color depth'), `${colorDepth} ${i18n('bit')}`],
        typeof isHdr === 'undefined' ? EMPTY_ITEM : [(<HdrLabel enabled={Boolean(isHdr)} />), getChecked(Boolean(isHdr))],
        !colorSpaces || !colorSpaces.length ? EMPTY_ITEM : [i18n('Color spaces'), (<ColorSpaceList items={colorSpaces} />)],
        typeof isPrimary === 'undefined' ? EMPTY_ITEM : [i18n('Primary'), getChecked(Boolean(isPrimary))],
        typeof isInternal === 'undefined' ? EMPTY_ITEM : [i18n('Internal'), getChecked(Boolean(isInternal))],
        typeof maxTouchPoints === 'undefined' ? EMPTY_ITEM : [i18n('Max touch points'), maxTouchPoints],
    ];

    items = items.filter(Boolean);

    return (
        <div class={b()}>
            {label ? (<div class={b('label')}>{label}</div>) : ''}
            <DescriptionList items={items} />
            {needAdditionalMonitorWarning() ? (<WarningMessage class={b('additional-monitor')}>{i18n('Additional monitor detected')}</WarningMessage>) : ''}
        </div>
    );
}
