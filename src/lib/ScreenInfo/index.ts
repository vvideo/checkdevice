import {
    getDevicePixelRatio,
    isHighDynamicRangeSupported,
    isP3Supported,
    isRec2020Supported,
    isSrgbSupported,
} from 'detect-audio-video';
import { noop } from '../../utils/function/noop';
import { isSsr } from '../../utils/isSsr';
import { needChangeWidthHeight } from '../../utils/dom/needChangeWidthHeight';

export interface ScreenDetailed extends Screen {
    label: string;
    devicePixelRatio: number;
    isInternal?: boolean;
    isExtended?: boolean;
    isPrimary?: boolean;
}

export interface ScreenDetailedPrepared extends ScreenDetailed {
    isHdr?: boolean;
    colorSpaces: string[];
}

export interface ScreenDetailedResult {
    currentScreen: ScreenDetailed;
    screens: ScreenDetailed[];
    onscreenschange(): void;
}

declare global {
    interface Window {
        getScreenDetails?(): Promise<ScreenDetailedResult>;
    }

    interface Screen {
        isExtended?: boolean;
        availLeft?: number;
        availTop?: number;
        addEventListener?(name: string, callback: () => void): void;
        removeEventListener?(name: string, callback: () => void): void;
    }
}

class ScreenInfo {
    private listeners: (() => void)[] = [];
    private devicePixelRatio = isSsr ? 1 : getDevicePixelRatio();
    private preparedScreens: ScreenDetailedPrepared[] = [];
    private timer = -1;

    public isScreenDetails = false;
    public needUserActivity = false;
    public isDenied = false;

    constructor() {
        if (isSsr) {
            return;
        }

        let screenJson = JSON.stringify(this.getScreen());

        this.timer = window.setInterval(() => {
            const currentDevicePixelRation = getDevicePixelRatio();
            if (this.devicePixelRatio !== currentDevicePixelRation) {
                this.devicePixelRatio = currentDevicePixelRation;
                this.handleScreenChange();
            }

            if (window.screen.addEventListener) {
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

    public getScreenDetails() {
        if (isSsr || !window.getScreenDetails) {
            return Promise.resolve();
        }

        return window.getScreenDetails().then(result => {
            window.clearInterval(this.timer);

            this.isScreenDetails = true;
            this.needUserActivity = false;

            this.setScreens(result.screens);

            this.unbindScreenChange();
            result.onscreenschange = () => {
                this.setScreens(result.screens);
                this.emit();
            };

            return result;
        }).catch(e => {
            this.needUserActivity = true;
            this.emit();

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

    private setScreens(screens: ScreenDetailed[]) {
        this.bindScreensChange(screens);
        this.preparedScreens = this.prepareScreens(screens);
    }

    private bindScreensChange(screens: ScreenDetailed[]) {
        screens.forEach(screen => {
            if (screen.removeEventListener) {
                screen.removeEventListener('change', this.handleScreenChange);
            }

            if (screen.addEventListener) {
                screen.addEventListener('change', this.handleScreenChange);
            }
        });
    }

    private bindScreenChange() {
        this.unbindScreenChange();

        if (screen.addEventListener) {
            screen.addEventListener('change', this.handleScreenChange);
        }
    }

    private unbindScreenChange() {
        if (screen.removeEventListener) {
            screen.removeEventListener('change', this.handleScreenChange);
        }
    }

    private getAdditionalPropsForScreen(screen: ScreenDetailed) {
        const result: { isHdr: boolean | undefined, colorSpaces: string[]; } = {
            isHdr: false,
            colorSpaces: [],
        };

        try {
            const win = window.open(
                'about:blank',
                'checkdevice',
                `popup=yes,left=${screen.availLeft},top=${screen.availTop},width=100,height=100`,
            ) as Window & typeof globalThis | null;

            if (win) {
                result.isHdr = isHighDynamicRangeSupported(win);
                result.colorSpaces = this.getColorSpaces(win);
                win.close();
            }
        } catch(e) {
            console.error(e);
        }

        return result;
    }

    private getColorSpaces(win = window) {
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

    private getAdditionalProps() {
        return {
            isHdr: isHighDynamicRangeSupported(),
            colorSpaces: this.getColorSpaces(),
        };
    }

    public get() {
        return isSsr ? [] : this.preparedScreens;
    }

    private prepareScreens(screens: ScreenDetailed[]): ScreenDetailedPrepared[] {
        const result = this.isScreenDetails ?
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
                };
            }) : [this.getScreen()];

        return result;
    }

    private emit() {
        console.log('ScreenInfo: emit');
        this.listeners.forEach(item => item());
    }

    private handleScreenChange = () => {
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
        };
    }
}

export const screenInfo = new ScreenInfo();

export function isScreensLargerThan2K(screens: ScreenDetailed[]) {
    return screens.some(screen => {
        return isLargerFullHd(Math.min(screen.width, screen.height) * screen.devicePixelRatio);
    });
}

const FULL_HD_HEIGHT = 1080;
const HEIGHT_PADDING = 5;

export function isLargerFullHd(height: number) {
    return height > FULL_HD_HEIGHT + HEIGHT_PADDING;
}

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
