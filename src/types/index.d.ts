export {}

declare global {
    interface Window {
        documentPictureInPicture?: unknown;
    }

    interface BatteryManager {
        charging: boolean;
        chargingTime: number;
        dischargingTime: number;
        level: number;
    }

    interface Gamepad {
        hand?: 'left' | 'right' | '';
    }

    interface Navigator {
        deviceMemory?: number;
        getBattery?(): Promise<BatteryManager>;
        connection?: {
            downlink: number;
            effectiveType: string;
            rtt: number;
            saveData: boolean;
            type?: string;
            downlinkMax?: number;
        };

        msMaxTouchPoints?: number;

        getAutoplayPolicy?: (type: 'mediaelement' | 'audiocontext' |  AudioContext | HTMLMediaElement) => 'allowed' | 'allowed-muted' | 'disallowed';
    }
}
