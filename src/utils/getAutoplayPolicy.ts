export function getAutoplayPolicy(): string {
    // @ts-ignore
    if (!navigator.getAutoplayPolicy) {
        return '';
    }

    // @ts-ignore
    return navigator.getAutoplayPolicy('mediaelement');
}
