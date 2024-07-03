export class Signal<T = void> {
    private listeners: ((name: T) => void)[] = [];

    public addListener(callback: (name: T) => void) {
        if (callback) {
            this.listeners.push(callback);
        }
    }

    public removeListener(callback: (name: T) => void) {
        this.listeners = this.listeners.filter(item => callback !== item);
    }

    public trigger(name: T) {
        this.listeners.forEach(item => item(name));
    }

    public clearListeners() {
        this.listeners.length = 0;
    }
}
