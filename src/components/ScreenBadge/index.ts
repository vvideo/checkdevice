import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Badge } from '../Badge';
import { getResolutionBadge, isMobile } from 'detect-audio-video';
import { block } from '../../utils/bem';
import { isLargerFullHd } from '../../lib/ScreenInfo';

import './index.css';
import { ScreenDetails } from '../ScreenDetails';

const b = block('screen-badge');

interface ScreenBadge {
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

export function ScreenBadge(props: ScreenBadge) {
    const [withDevicePixelRatio, setWithDevicePixelRatio] = useState(true);
    const handleClick = useCallback(() => {
        setWithDevicePixelRatio(!withDevicePixelRatio);
    }, [withDevicePixelRatio]);

    const labelContent = props.label ? html`<div class="${b('label')}">${props.label}</div>` : '';

    const background = isLargerFullHd(Math.min(props.width, props.height) * props.devicePixelRatio) ? 'gold' : 'white';

    return html`
        <div class="${b()}" onClick=${handleClick}>
            ${labelContent}
            ${Badge({
                // TODO: Temporarily hide badge for mobile devices
                text: isMobile() ? '' : getResolutionBadge(
                        Math.max(props.width, props.height) * props.devicePixelRatio,
                        Math.min(props.width, props.height) * props.devicePixelRatio,
                ) || '',
                type: '4k',
                click: true,
                background,
                top: {
                    text: html`<b>${props.isHdr ? 'HDR' :'\u00A0'}</b>`,
                },
                bottom: {
                    text: ScreenDetails({
                        width: props.width,
                        height: props.height,
                        colorDepth: props.colorDepth,
                        isPrimary: props.isPrimary,
                        isInternal: props.isInternal,
                        colorSpaces: props.colorSpaces,
                        withDevicePixelRatio,
                        devicePixelRatio: props.devicePixelRatio,
                    }),
                    title: [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×'),
                },
            })}
        </div>
    `;
}
