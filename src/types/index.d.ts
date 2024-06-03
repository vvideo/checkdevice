export {}

declare global {
    interface BatteryManager {
        charging: boolean;
        chargingTime: number;
        dischargingTime: number;
        level: number;
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

        getAutoplayPolicy?: (type: 'mediaelement' | 'audiocontext' |  AudioContext | HTMLMediaElement) => 'allowed' | 'allowed-muted' | 'disallowed';
    }
}
