import { Signal } from '../Signal';

export class KeyboardLedController {
    private signal = new Signal<'CapsLock' | 'ScrollLock' | 'NumLock'>();

    public capsLock = false;
    public scrollLock = false;
    public numLock = false;

    public on() {
        this.bindMouseEvents();
        this.bindKeyboardEvents();
    }

    public off() {
        this.unbindMouseEvents();
        this.unbindKeyboardEvents();
    }

    public bindMouseEvents() {
        document.addEventListener('mousemove', this.handleMouse);
        document.addEventListener('mousedown', this.handleMouse);
        document.addEventListener('mouseup', this.handleMouse);
    }

    public bindKeyboardEvents() {
        document.addEventListener('keydown', this.handleKey);
        document.addEventListener('keyup', this.handleKey);
    }

    public unbindMouseEvents() {
        document.removeEventListener('mousemove', this.handleMouse);
        document.removeEventListener('mousedown', this.handleMouse);
        document.removeEventListener('mouseup', this.handleMouse);
    }

    public unbindKeyboardEvents() {
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
            const statusCapsLock = event.getModifierState('CapsLock');
            if (this.capsLock !== statusCapsLock) {
                this.capsLock = statusCapsLock;
                this.signal.trigger('CapsLock');
            }

            const statusScrollLock = event.getModifierState('ScrollLock');
            if (this.scrollLock !== statusScrollLock) {
                this.scrollLock = statusScrollLock;
                this.signal.trigger('ScrollLock');
            }

            const statusNumLock = event.getModifierState('NumLock');
            if (this.numLock !== statusNumLock) {
                this.numLock = statusNumLock;
                this.signal.trigger('NumLock');
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