export function isDesktopSafari() {
    const { vendor, userAgent } = navigator;

    return /Safari/i.test(userAgent) &&
        /Apple Computer/i.test(vendor) &&
        !/Mobi|Android/i.test(userAgent);
}
