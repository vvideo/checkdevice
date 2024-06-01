export {}

declare global {
    interface Navigator {
        deviceMemory?: number;
        getBattery?(): Promise<{
            charging: boolean;
            chargingTime: number;
            dischargingTime: number;
            level: number;
        }>;
        connection?: {
            downlink: number;
            effectiveType: string;
            rtt: number;
            saveData: boolean;
        };
    }
}
