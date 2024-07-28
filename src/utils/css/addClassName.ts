export function addClassName(elem: HTMLElement, className: string) {
    if (elem.classList) {
        elem.classList.add(className);
    } else {
        elem.className += (elem.className ? ' ' : '') + className;
    }
}
