export class Signal<T = void> {
    private listeners: ((name: T) => void)[] = [];

    public addListener(callback: (data: T) => void) {
        if (callback) {
            this.listeners.push(callback);
        }
    }

    public removeListener(callback: (data: T) => void) {
        this.listeners = this.listeners.filter(item => callback !== item);
    }

    public trigger(data: T) {
        this.listeners.forEach(item => item(data));
    }

    public clearListeners() {
        this.listeners.length = 0;
    }
}
