import { isP3Supported, isRec2020Supported, isSrgbSupported } from 'detect-audio-video';
import { ScreenDetailed } from './types';
import { FULL_HD_HEIGHT, HEIGHT_PADDING } from './constants';

export function isScreensLargerThan2K(screens: ScreenDetailed[]) {
    return screens.some(screen => {
        return isLargerFullHd(Math.min(screen.width, screen.height) * screen.devicePixelRatio);
    });
}

export function isLargerFullHd(height: number) {
    return height > FULL_HD_HEIGHT + HEIGHT_PADDING;
}

export function getColorSpaces(win = window) {
    const result: string[] = [];

    if (isSrgbSupported(win)) {
        result.push('srgb');
    }

    if (isP3Supported(win)) {
        result.push('p3');
    }

    if (isRec2020Supported(win)) {
        result.push('rec2020');
    }

    return result;
}
