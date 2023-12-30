import { getDevicePixelRatio } from 'detect-audio-video';

export function hasZoom() {
    const devicePixelRatio = getDevicePixelRatio();

    const floorDevicePixelRatio = Math.floor(devicePixelRatio);

    if (devicePixelRatio === 1.5) {
        return false;
    }

    if (devicePixelRatio !== floorDevicePixelRatio) {
        return true;
    }

    if (devicePixelRatio > 4) {
        return true;
    }

    return false;
}
