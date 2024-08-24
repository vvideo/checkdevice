export function getAutoplayPolicy(): string {
    if (!navigator.getAutoplayPolicy) {
        return '';
    }

    return navigator.getAutoplayPolicy('mediaelement');
}
