export function isMacintosh() {
    return navigator.userAgent.indexOf('Mac') > -1;
}

export function isWindows() {
    return navigator.userAgent.indexOf('Win') > -1;
}
