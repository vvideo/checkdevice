const localStorageInMemory: Record<string, string> = {};

export function setLocalStorageItem(key: string, value: any) {
    const ls = window.localStorage;

    localStorageInMemory[key] = String(value);

    try {
        ls.setItem(key, value);
    } catch { /* */ }
}

export function getLocalStorageItem(key: string) {
    const ls = window.localStorage;

    try {
        return ls.getItem(key);
    } catch {
        return localStorageInMemory[key];
    }
}
