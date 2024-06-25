const BUFFER_SIZE = 200;

export class RefreshRateController {
    private requestId: null | number = null;
    private lastTimestamp = 0;
    private buffer: number[] = [];

    public static hasSupport() {
        return Boolean(
            typeof window.performance?.now === 'function' &&
            typeof window.requestAnimationFrame === 'function'
        );
    }

    public get(): null | number {
        if (this.buffer.length < BUFFER_SIZE) {
            return null;
        }

        const clonedBuffer = [...this.buffer];
        clonedBuffer.sort((a, b) => a - b);

        const values = clonedBuffer.slice(Math.floor(BUFFER_SIZE * 0.1), Math.floor(BUFFER_SIZE - BUFFER_SIZE * 0.1));
        let sum = 0;
        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }

        return 1000 / sum * values.length;
    }

    public start() {
        if (!this.requestId) {
            this.requestAnimationFrame();
        }
    }

    public stop() {
        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = null;
        }
    }

    private requestAnimationFrame() {
        this.requestId = window.requestAnimationFrame(this.handleAnimationFrame);
    }

    private handleAnimationFrame = (timestamp: number) => {
        if (!document.hidden) {
            this.update(timestamp);
        }

        this.requestAnimationFrame();
    }

    private update(timestamp: number) {
        this.buffer.push(timestamp - this.lastTimestamp);
        if (this.buffer.length > BUFFER_SIZE) {
            this.buffer.shift();
        }

        this.lastTimestamp = timestamp;
    }
}
