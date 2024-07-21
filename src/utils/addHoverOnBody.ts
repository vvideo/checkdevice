import { addClassName } from "./addClassName";

function handleHover() {
    document.removeEventListener('mousemove', handleHover);

    addClassName(document.body, 'hover_yes');
}

export function addHoverOnBody() {
    document.addEventListener('mousemove', handleHover);
}
