import { getDevicePixelRatio } from 'detect-audio-video';

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

    public needUserActivity = false;

    constructor() {
        let screenJson = JSON.stringify(this.getScreen());

        window.setInterval(() => {
            const currentDevicePixelRation = getDevicePixelRatio();
            if (this.devicePixelRatio !== currentDevicePixelRation) {
                this.devicePixelRatio = currentDevicePixelRation;
                this.handleScreenChange();
            }

            if (this.isScreenDetails || window.screen.addEventListener) {
                return;
            }

            const currentScreenJson = JSON.stringify(this.getScreen());
            if (screenJson !== currentScreenJson) {
                screenJson = currentScreenJson;
                this.handleScreenChange();
            }
        }, 500);

        if (window.screen.addEventListener) {
            window.screen.addEventListener('change', this.handleScreenChange);
        }

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
            this.isScreenDetails = true;
            this.needUserActivity = false;
            this.screens = result.screens;
            this.emit();

            result.onscreenschange = () => {
                this.screens = result.screens;
                this.emit();
            };

            return result;
        }).catch(e => {
            this.needUserActivity = true;
            this.emit();

            throw e;
        });
    }

    public get() {
        const result = {
            isScreenDetails: this.isScreenDetails,
            screens: this.isScreenDetails ?
                this.screens.map(item => {
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
        if (this.isScreenDetails) {
            return;
        }

        this.emit();
    }

    private getScreen() {
        const screen = window.screen;

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
        };
    }
}

export const screenInfo = new ScreenInfo();
