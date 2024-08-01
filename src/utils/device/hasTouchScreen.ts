export function hasTouchScreen() {
    return Boolean(('ontouchstart' in window) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0));
}
