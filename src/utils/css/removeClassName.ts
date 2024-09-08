export function removeClassName(elem?: HTMLElement, className?: string) {
    if (!elem || !className) {
        return;
    }

    if (elem.classList) {
        elem.classList.remove(className);
    } else {
        const cls = elem.className.split(/\s+/).filter(item => item !== className && item);
        elem.className = cls.join(' ');
    }
}
