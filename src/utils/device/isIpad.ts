
export function isIpad(): boolean {
    if (/iPad/.test(navigator.platform)) {
        return true;
    } else {
        return Boolean(navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform));
    }
}
