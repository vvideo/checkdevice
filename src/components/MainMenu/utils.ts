export function getIdFromLocation() {
    const id = window.location.pathname
        // Fix for github pages
        .replace(/^\/caniwatchvideo/, '')
        .split(/[?.\/]/)[1];

    return id ? id : 'index';
}
