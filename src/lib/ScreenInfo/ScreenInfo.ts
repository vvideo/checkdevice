import {
    getDevicePixelRatio,
    isHighDynamicRangeSupported,
} from 'detect-audio-video';

import { noop } from '../../utils/function/noop';
import { isSsr } from '../../utils/isSsr';
import { needChangeWidthHeight } from '../../utils/dom/needChangeWidthHeight';
import { getColorSpaces, hasSupportScreenChangeEvent, openCheckWindow } from './utils';
import { ScreenDetailed, ScreenDetailedPrepared, ScreenDetailedResult } from './types';
import { DEFAULT_DEVICE_PIXEL_RATIO } from './constants';

class ScreenInfo {
    private listeners: (() => void)[] = [];
    private devicePixelRatio = isSsr ? DEFAULT_DEVICE_PIXEL_RATIO : getDevicePixelRatio();
    private preparedScreens: ScreenDetailedPrepared[] = [];
    private timer: number | undefined;
    private lastResult: ScreenDetailedResult | null = null;

    public isScreenDetails = false;
    public needUserActivity = false;
    public isDenied = false;

    constructor() {
        if (isSsr) {
            return;
        }

        const currentScreen = this.getScreen()
        this.setScreens([currentScreen]);
        let screenJson = JSON.stringify(currentScreen);

        this.timer = setInterval(() => {
            const currentDevicePixelRation = getDevicePixelRatio();
            if (this.devicePixelRatio !== currentDevicePixelRation) {
                this.devicePixelRatio = currentDevicePixelRation;
                this.handleScreenChange();
                return;
            }

            if (hasSupportScreenChangeEvent) {
                return;
            }

            const currentScreenJson = JSON.stringify(this.getScreen());
            if (screenJson !== currentScreenJson) {
                screenJson = currentScreenJson;
                this.handleScreenChange();
            }
        }, 500);

        this.bindScreenChange();

        this.getScreenDetails().catch(noop);
    }

    public addListener(callback: () => void) {
        this.listeners.push(callback);
    }

    public removeListener(callback: () => void) {
        this.listeners = this.listeners.filter(item => {
            return item !== callback;
        });
    }

    public clearListeners() {
        this.listeners.length = 0;
    }

    public getScreenDetails() {
        if (isSsr || !window.getScreenDetails) {
            return Promise.resolve();
        }

        return window.getScreenDetails().then(result => {
            clearInterval(this.timer);
            delete this.timer;

            this.isScreenDetails = true;
            this.needUserActivity = false;

            this.clearLastResult();

            this.lastResult = result;

            this.setScreens(result.screens);
            this.emit();

            result.onscreenschange = () => {
                this.setScreens(result.screens);
                this.emit();
            };

            return result;
        }).catch(e => {
            this.needUserActivity = true;

            const permissions = { name: 'window-management' } as any as PermissionDescriptor;
            navigator.permissions.query(permissions).then((result) => {
                if (result.state === 'denied') {
                    this.isDenied = true;
                    this.needUserActivity = false;
                } else {
                    this.isDenied = false;
                    this.needUserActivity = true;
                }

                this.emit();
            });

            throw e;
        });
    }

    public get() {
        return isSsr ? [] : this.preparedScreens;
    }

    public destroy() {
        this.clearLastResult();
        this.clearListeners();
        this.preparedScreens.length = 0;
        if (this.timer) {
            clearInterval(this.timer);
            delete this.timer;
        }
    }

    private clearLastResult() {
        if (!this.lastResult) {
            return;
        }

        this.lastResult.onscreenschange = null;
        this.unbindScreensChange(this.lastResult.screens);
        this.lastResult = null;

        this.unbindScreenChange();
    }

    private setScreens(screens: ScreenDetailed[]) {
        this.unbindScreensChange(screens);
        this.bindScreensChange(screens);
        this.preparedScreens = this.prepareScreens(screens);
    }

    private unbindScreensChange(screens: ScreenDetailed[]) {
        screens.forEach(screen => {
            if (screen.removeEventListener) {
                screen.removeEventListener('change', this.handleScreenChange);
            }
        });
    }

    private bindScreensChange(screens: ScreenDetailed[]) {
        screens.forEach(screen => {
            if (screen.addEventListener) {
                screen.addEventListener('change', this.handleScreenChange);
            }
        });
    }

    private bindScreenChange() {
        this.unbindScreenChange();

        if (hasSupportScreenChangeEvent && screen.addEventListener) {
            screen.addEventListener('change', this.handleScreenChange);
        }
    }

    private unbindScreenChange() {
        if (hasSupportScreenChangeEvent && screen.removeEventListener) {
            screen.removeEventListener('change', this.handleScreenChange);
        }
    }

    private getAdditionalPropsForScreen(screen: ScreenDetailed) {
        const result: { isHdr: boolean | undefined, colorSpaces: string[]; } = {
            isHdr: undefined,
            colorSpaces: [],
        };

        try {
            const win = openCheckWindow(screen.availLeft!, screen.availTop!);

            if (win) {
                // @ts-ignore
                result.isHdr = isHighDynamicRangeSupported(win);
                // @ts-ignore
                result.colorSpaces = getColorSpaces(win);
            }
        } catch(e) {
            console.error(e);
        }

        return result;
    }

    private getAdditionalProps() {
        return {
            isHdr: isHighDynamicRangeSupported(),
            colorSpaces: getColorSpaces(),
        };
    }

    private prepareScreens(screens: ScreenDetailed[]): ScreenDetailedPrepared[] {
        const { isScreenDetails } = this;
        const result = isScreenDetails ?
            screens.map(item => {
                const additionalProps = item.isPrimary ?
                    this.getAdditionalProps() :
                    this.getAdditionalPropsForScreen(item);

                return {
                    availLeft: item.availLeft,
                    availTop: item.availTop,
                    availWidth: item.availWidth,
                    availHeight: item.availHeight,
                    colorDepth: item.colorDepth,
                    pixelDepth: item.pixelDepth,
                    width: item.width,
                    height: item.height,
                    label: item.label,
                    isInternal: item.isInternal,
                    isPrimary: item.isPrimary,
                    isHdr: additionalProps.isHdr,
                    colorSpaces: additionalProps.colorSpaces,
                    isExtended: item.isExtended,
                    orientation: item.orientation,
                    devicePixelRatio: item.devicePixelRatio,
                    isScreenDetails,
                };
            }) : [this.getScreen()];

        return result;
    }

    private emit() {
        console.log('ScreenInfo: emit');
        this.listeners.forEach(item => item());
    }

    private handleScreenChange = () => {
        if (this.isScreenDetails && this.lastResult) {
            this.setScreens(this.lastResult.screens);
        } else {
            this.setScreens([this.getScreen()]);
        }

        this.emit();
    }

    private getScreen() {
        const { screen } = window;

        const additionalProps = this.getAdditionalProps();

        const needChange = needChangeWidthHeight();

        const width = needChange ? screen.height : screen.width;
        const height = needChange ? screen.width : screen.height;
        const availWidth = needChange ? screen.availHeight : screen.availWidth;
        const availHeight = needChange ? screen.availWidth : screen.availHeight;

        return {
            availLeft: screen.availLeft,
            availTop: screen.availTop,
            availWidth,
            availHeight,
            width,
            height,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth,
            label: '',
            isInternal: undefined,
            isPrimary: undefined,
            isExtended: Boolean(screen.isExtended),
            orientation: screen.orientation,
            devicePixelRatio: getDevicePixelRatio(),
            isHdr: additionalProps.isHdr,
            colorSpaces: additionalProps.colorSpaces,
            isScreenDetails: false,
        };
    }
}

export const screenInfo = new ScreenInfo();

export function needHdcpWarning() {
    const screens = screenInfo.get();

    if (
        screenInfo.isScreenDetails &&
        screens.length === 1 &&
        screens[0].isInternal
    ) {
        return false;
    }

    return true;
}

export function needAdditionalMonitorWarning() {
    return !screenInfo.isScreenDetails &&
        typeof screen !== 'undefined' &&
        screen.isExtended === true;
}
