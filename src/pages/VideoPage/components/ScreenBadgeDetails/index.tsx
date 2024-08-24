import { h } from 'preact';
import { calcAspectRatio } from 'calc-aspect-ratio';

import { hasZoom } from '../../../../utils/dom/hasZoom';
import { i18n } from '../../../../i18n';
import { prepareColorSpaces } from '../../../../utils/dom/getColorSpaces';
import { getChecked } from '../../../../utils/getChecked';
import { block } from '../../../../utils/css/bem';
import { ValueInProgress } from '../../../../components/ValueInProgress';
import { isSsr } from '../../../../utils/isSsr';

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
    if (isSsr) {
        return (<ScreenBadgeDetailsSsr />);
    }

    const screenSize = props.withDevicePixelRatio ?
        [props.width, props.height, props.devicePixelRatio] :
        [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio];

    return (
        <ul class={b()}>
            <li class={b('item')}>{i18n('Size')}: {screenSize.join('×')}</li>
            <li class={b('item')}>{i18n('Aspect ratio')}: {calcAspectRatio(Math.floor(props.width), Math.floor(props.height)).value}</li>
            {hasZoom() ? (<li class={b('item')}>⚠ {i18n('Please reset zoom in the page')}</li>) : ''}
            <li class={b('item')}>{i18n('Color depth')}: {props.colorDepth} {i18n('bit')}</li>
            <li class={b('item')}>{props.colorSpaces && props.colorSpaces.length ? prepareColorSpaces(props.colorSpaces) : ''}</li>
            {typeof props.isPrimary === 'undefined' ? '' : (<li class={b('item')}>{i18n('Primary')}: {getChecked(props.isPrimary)}</li>)}
            {typeof props.isInternal === 'undefined' ? '' : (<li class={b('item')}>{i18n('Internal')}: {getChecked(props.isInternal)}</li>)}
        </ul>
    );
}

export function ScreenBadgeDetailsSsr() {
    return (
        <ul class={b()}>
            <li class={b('item')}>{i18n('Size')}: <ValueInProgress /></li>
            <li class={b('item')}>{i18n('Aspect ratio')}: <ValueInProgress /></li>
            <li class={b('item')}>{i18n('Color depth')}: <ValueInProgress /></li>
            <li class={b('item')}>{prepareColorSpaces(['srgb'])}</li>
            <li class={b('item')}>{i18n('Primary')}: <ValueInProgress /></li>
            <li class={b('item')}>{i18n('Internal')}: <ValueInProgress /></li>
        </ul>
    );
}
