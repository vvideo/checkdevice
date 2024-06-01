export function getIdFromLocation() {
    const id = window.location.pathname.split(/[?.\/]/)[1];

    return id ? id : 'index';
}
