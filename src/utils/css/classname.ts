export function classname(...values: unknown[]) {
    return values.filter(item => {
        return item !== null && item !== undefined && item !== false && item !== true && item !== '';
    }).join(' ');
}
