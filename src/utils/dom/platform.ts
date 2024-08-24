export function isMacintosh() {
    return navigator.userAgent.indexOf('Mac') > -1;
}

export function isWindows() {
    return navigator.userAgent.indexOf('Win') > -1;
}

export function isIpad(): boolean {
    if (/iPad/.test(navigator.platform)) {
        return true;
    } else {
        return Boolean(navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform));
    }
}
