export function needChangeWidthHeight() {
    // For old mobile Safari
    return !screen.orientation &&
        typeof window.orientation === 'number' &&
        (window.orientation === 90 || window.orientation === -90);
}
