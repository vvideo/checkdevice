import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import { getResolutionBadge, isMobile } from 'detect-audio-video';

import { Badge } from '../../../../components/Badge';
import { block } from '../../../../utils/css/bem';
import { isLargerFullHd } from '../../../../lib/ScreenInfo';
import { ScreenBadgeDetails } from '../ScreenBadgeDetails';

import './index.css';

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

    const labelContent = props.label ? (<div class={b('label')}>{props.label}</div>) : '';

    const background = isLargerFullHd(Math.min(props.width, props.height) * props.devicePixelRatio) ? 'gold' : 'white';

    return (
        <div class={b()} onClick={handleClick}>
            {labelContent}
            <Badge
                // TODO: Temporarily hide badge for mobile devices
                text={isMobile() ? '' : getResolutionBadge(
                        Math.max(props.width, props.height) * props.devicePixelRatio,
                        Math.min(props.width, props.height) * props.devicePixelRatio,
                ) || ''}
                type="4k"
                click={true}
                background={background}
                top={{
                    text: isMobile() ? '' : (<span style="font-weight:bold">{props.isHdr ? 'HDR' :'\u00A0'}</span>),
                }}
                bottom={{
                    text: ScreenBadgeDetails({
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
                }}
            />
        </div>
    );
}
