import {
    getDevicePixelRatio,
    isHighDynamicRangeSupported,
    isP3Supported,
    isRec2020Supported,
    isSrgbSupported,
} from 'detect-audio-video';

export interface ScreenDetailed extends Screen {
    label: string;
    devicePixelRatio: number;
    isInternal?: boolean;
    isExtended?: boolean;
    isPrimary?: boolean;
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
    private devicePixelRatio = getDevicePixelRatio();
    private isScreenDetails = false;
    private screens: ScreenDetailed[] = [];
    private timer = -1;

    public needUserActivity = false;

    constructor() {
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

        this.getScreenDetails();
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
        if (!window.getScreenDetails) {
            return Promise.resolve();
        }

        return window.getScreenDetails().then(result => {
            window.clearInterval(this.timer);

            this.isScreenDetails = true;
            this.needUserActivity = false;

            this.screens = result.screens;
            this.emit();

            this.unbindScreenChange();
            this.bindScreensChange(result.screens);

            result.onscreenschange = () => {
                this.bindScreensChange(result.screens);
                this.screens = result.screens;
                this.emit();
            };

            return result;
        }).catch(e => {
            // @ts-ignore
            navigator.permissions.query({ name: 'window-management' }).then((result) => {
                if (result.state === 'denied') {
                    this.needUserActivity = false;
                } else {
                    this.needUserActivity = true;
                }

                this.emit();
            });

            this.needUserActivity = true;
            this.emit();

            throw e;
        });
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
        const result: { isHdr: boolean, colorSpaces: string[]; } = {
            isHdr: false,
            colorSpaces: [],
        };

        try {
            const win = window.open(
                'about:blank',
                'caniwatchvideo',
                `popup=yes,left=${screen.availLeft},top=${screen.availTop},width=100,height=100`,
            );

            if (win) {
                // @ts-ignore
                result.isHdrSupported = isHighDynamicRangeSupported(win);
                // @ts-ignore
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
        const result = {
            isScreenDetails: this.isScreenDetails,
            screens: this.isScreenDetails ?
                this.screens.map(item => {
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
                }) :
                [this.getScreen()],
        };

        return result;
    }

    private emit() {
        this.listeners.forEach(item => item());
    }

    private handleScreenChange = () => {
        this.emit();
    }

    private getScreen() {
        const screen = window.screen;

        const additionalProps = this.getAdditionalProps();

        return {
            availLeft: screen.availLeft,
            availTop: screen.availTop,
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth,
            width: screen.width,
            height: screen.height,
            label: '',
            isInternal: false,
            isPrimary: false,
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
    const info = screenInfo.get();
    
    if (
        info.isScreenDetails &&
        info.screens.length === 1 &&
        info.screens[0].isInternal
    ) {
        return false;
    }

    return true;
}
