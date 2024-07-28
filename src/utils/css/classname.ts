export function classname(...values: unknown[]) {
    return values.filter(item => {
        return item !== null && item !== undefined;
    }).join(' ');
}
