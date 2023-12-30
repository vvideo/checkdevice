import { calcAspectRatio } from 'calc-aspect-ratio';
import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Badge } from '../Badge';
import { getResolutionBadge } from 'detect-audio-video';
import { block } from '../../utils/bem';

import './index.css';
import { hasZoom } from '../../utils/hasZoom';

const b = block('screen-badge');

interface ScreenBadge {
    width: number;
    height: number;
    devicePixelRatio: number;
    colorDepth: number;
    isHDR?: boolean;
    isExtended?: boolean;
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
        <div>Size: ${screenSize}</div>
        ${hasZoom() ? html`<div>⚠ Please reset zoom in the page</div>` : ''}
        <div>Color depth: ${props.colorDepth} bit</div>
        <div>Aspect ratio: ${calcAspectRatio(props.width, props.height).value}</div>
        ${props.isPrimary ? html`<div>Primary: Yes</div>` : ''}
        ${props.isInternal ? html`<div>Internal: Yes</div>` : ''}
    `;

    return html`        
        <div class="${b()}" onClick=${handleClick}>
            <div class="${b('label')}">${props.label}</div>
            ${Badge({
                text: getResolutionBadge(Math.max(props.width, props.height) * props.devicePixelRatio) || '',
                type: '4k',
                click: true,
                background: 'gold',
                top: {
                    text: props.isHDR ? html`<b>HDR</b>` : '',
                },
                bottom: {
                    text: screenText,
                    title: [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×'),
                },
            })}
        </div>
    `;
}

