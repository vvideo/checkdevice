import { calcAspectRatio } from 'calc-aspect-ratio';
import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Badge } from '../Badge';
import { getResolutionBadge } from 'detect-audio-video';
import { block } from '../../utils/bem';
import { hasZoom } from '../../utils/hasZoom';
import { i18n } from '../../i18n/i18n';

import './index.css';

const b = block('screen-badge');

interface ScreenBadge {
    isScreenDetails?: boolean;
    width: number;
    height: number;
    devicePixelRatio: number;
    colorDepth: number;
    isHdr?: boolean;
    colorSpaces?: string[];
    isInternal?: boolean;
    isPrimary?: boolean;
    label?: string;
}

function getColorSpaces(spaces?: string[]) {
    if (!spaces) {
        return '';
    }

    return [
        'srgb',
        'p3',
        'rec2020',
    ].map(item => {
        const title = getColorSpaceTitle(item);
        return `${spaces.indexOf(item) > -1 ? '✓' : '✗'} ${title}`;
    }).join(',\u00A0');
}

function getColorSpaceTitle(name: string) {
    return {
        srgb: 'sRGB',
        p3: 'DCI-P3',
        rec2020: 'Rec.2020',
    }[name] || name;
}

export function ScreenBadge(props: ScreenBadge) {
    const [withDevicePixelRatio, setWithDevicePixelRatio] = useState(true);
    const handleClick = useCallback(() => {
        setWithDevicePixelRatio(!withDevicePixelRatio);
    }, [withDevicePixelRatio]);

    const screenSize = withDevicePixelRatio ?
        [props.width, props.height, props.devicePixelRatio].join('×') :
        [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×');

    const screenText = html`
        <div>${i18n('Size')}: ${screenSize}</div>
        <div>${i18n('Aspect ratio')}: ${calcAspectRatio(props.width, props.height).value}</div>
        ${hasZoom() ? html`<div>⚠ ${i18n('Please reset zoom in the page')}</div>` : ''}
        <div>${i18n('Color depth')}: ${props.colorDepth} ${i18n('bit')}</div>
        <div>${props.colorSpaces && props.colorSpaces.length ? getColorSpaces(props.colorSpaces) : ''}</div>
        ${props.isPrimary ? html`<div>${i18n('Primary')}: ${i18n('Yes')}</div>` : ''}
        ${props.isInternal ? html`<div>${i18n('Internal')}: ${i18n('Yes')}</div>` : ''}
    `;

    return html`
        <div class="${b()}" onClick=${handleClick}>
            <div class="${b('label')}">${props.label}</div>
            ${Badge({
                text: getResolutionBadge(
                        Math.max(props.width, props.height) * props.devicePixelRatio,
                        Math.min(props.width, props.height) * props.devicePixelRatio,
                ) || '',
                type: '4k',
                click: true,
                background: 'gold',
                top: {
                    text: props.isHdr ? html`<b>HDR</b>` : '<b>\u00A0</b>',
                },
                bottom: {
                    text: screenText,
                    title: [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×'),
                },
            })}
        </div>
    `;
}
