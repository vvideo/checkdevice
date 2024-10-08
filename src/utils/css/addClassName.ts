export function addClassName(elem?: HTMLElement, className?: string) {
    if (!elem || !className) {
        return;
    }

    if (elem.classList) {
        elem.classList.add(className);
    } else {
        const cls = elem.className.split(/\s+/).filter(item => item !== className && item);
        cls.push(className);

        elem.className = cls.join(' ');
    }
}
