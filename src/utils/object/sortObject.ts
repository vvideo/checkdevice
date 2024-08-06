export function sortObject(obj: Record<string, unknown>) {
    return Object.keys(obj)
        .sort()
        .reduce((a, v) => {
            a[v] = obj[v];
            return a;
        }, {} as Record<string, unknown>);
}
