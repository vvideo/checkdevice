export class Signal {
    private listeners: VoidFunction[] = [];

    public addListener(callback: VoidFunction) {
        if (callback) {
            this.listeners.push(callback);
        }
    }

    public removeListener(callback: VoidFunction) {
        this.listeners = this.listeners.filter(item => callback !== item);
    }

    public trigger() {
        this.listeners.forEach(item => item());
    }

    public clearListeners() {
        this.listeners.length = 0;
    }
}
