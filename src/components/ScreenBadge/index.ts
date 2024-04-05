import { calcAspectRatio } from 'calc-aspect-ratio';
import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Badge } from '../Badge';
import { getResolutionBadge, isHdrScreenSupported } from 'detect-audio-video';
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
    isHDR?: boolean;
    isInternal?: boolean;
    isPrimary?: boolean;
    label?: string;
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
        ${hasZoom() ? html`<div>⚠ ${i18n('Please reset zoom in the page')}</div>` : ''}
        <div>${i18n('Color depth')}: ${props.colorDepth} ${i18n('bit')}</div>
        <div>${i18n('Aspect ratio')}: ${calcAspectRatio(props.width, props.height).value}</div>
        ${props.isPrimary ? html`<div>${i18n('Primary')}: ${i18n('Yes')}</div>` : ''}
        ${props.isInternal ? html`<div>${i18n('Internal')}: ${i18n('Yes')}</div>` : ''}
    `;

    const isHDR = props.isScreenDetails ? props.colorDepth > 24 : isHdrScreenSupported();

    return html`
        <div class="${b()}" onClick=${handleClick}>
            <div class="${b('label')}">${props.label}</div>
            ${Badge({
                text: getResolutionBadge(Math.max(props.width, props.height) * props.devicePixelRatio) || '',
                type: '4k',
                click: true,
                background: 'gold',
                top: {
                    text: isHDR ? html`<b>HDR</b>` : '',
                },
                bottom: {
                    text: screenText,
                    title: [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×'),
                },
            })}
        </div>
    `;
}

