import { Signal } from '../Signal';

export class KeyboardLedController {
    private signal = new Signal();

    public capsLock = false;

    public on() {
        this.bindMouse();
        this.bindKeyboard();
    }

    public off() {
        this.unbindMouse();
        this.unbindKeyboard();
    }

    private bindMouse() {
        document.addEventListener('mousemove', this.handleMouse);
        document.addEventListener('mousedown', this.handleMouse);
        document.addEventListener('mouseup', this.handleMouse);
    }

    private bindKeyboard() {
        document.addEventListener('keydown', this.handleKey);
        document.addEventListener('keyup', this.handleKey);
    }

    private unbindMouse() {
        document.removeEventListener('mousemove', this.handleMouse);
        document.removeEventListener('mousedown', this.handleMouse);
        document.removeEventListener('mouseup', this.handleMouse);
    }

    private unbindKeyboard() {
        document.removeEventListener('keydown', this.handleKey);
        document.removeEventListener('keyup', this.handleKey);
    }

    private handleMouse = (event: MouseEvent) => {
        this.update(event);
    }

    private handleKey = (event: KeyboardEvent) => {
        this.update(event);
    }

    private update(event: KeyboardEvent | MouseEvent) {
        if (event.getModifierState) {
            const status = event.getModifierState('CapsLock');
            if (this.capsLock !== status) {
                this.capsLock = status;
                this.signal.trigger();
            }
        }
    }

    public addListener(callback: VoidFunction) {
        this.signal.addListener(callback);
    }

    public removeListener(callback: VoidFunction) {
        this.signal.removeListener(callback);
    }
}

export const keyboardLedController = new KeyboardLedController();
