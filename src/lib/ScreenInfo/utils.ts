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

export function getColorSpaces(win: Window = window) {
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

declare global {
    interface Window {
        checkWindow: Window | null;
    }
}

export function openCheckWindow(left: number, top: number): Window | null {
    if (window.checkWindow && !window.checkWindow.closed) {
        window.checkWindow.moveTo(left, top);
        window.checkWindow.document.documentElement.setAttribute('style', 'color:white; background:black');
        if (window.checkWindow.document.body) {
            window.checkWindow.document.body.innerText = 'Check HDR';
        }

        return window.checkWindow;
    }

    window.checkWindow = window.open(
        'about:blank',
        'checkdevice',
        `popup=yes,left=${left},top=${top},width=100,height=100`,
    );

    return window.checkWindow;
}

export function closeCheckWindow() {
    if (window.checkWindow && !window.checkWindow.closed) {
        window.checkWindow.close();
    }
}

export const hasSupportScreenChangeEvent = typeof screen !== 'undefined' &&
    'onchange' in screen &&
    screen.addEventListener;
