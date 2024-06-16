export function getMaxTouchPoints() {
    return navigator.maxTouchPoints || navigator.msMaxTouchPoints || 0;
}
