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
    isScreenDetails: boolean;
}

export interface ScreenDetailedResult {
    currentScreen: ScreenDetailed;
    screens: ScreenDetailed[];
    onscreenschange: (() => void) | null;
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
