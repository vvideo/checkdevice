import { isIpad, isMacintosh } from '../../utils/platform';

export function getIsMacBook() {
    const { width, height } = window.screen;
    const aspectRatio = width / height;

    return aspectRatio > 1.5 && aspectRatio < 1.7;
}

export function getPlatform() {
    if (isIpad()) {
        return 'ipad';
    }

    if (isMacintosh()) {
        return getIsMacBook() ? 'macbook' : 'mac';
    }

    return 'win';
}
