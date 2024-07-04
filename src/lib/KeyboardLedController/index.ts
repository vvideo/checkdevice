import { isFirefox } from 'detect-audio-video';
import { Signal } from '../Signal';

export class KeyboardLedController {
    private signal = new Signal<'CapsLock' | 'ScrollLock' | 'NumLock'>();
    private isFirefox = isFirefox();

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
        document.addEventListener('keydown', this.handleKey, true);
        document.addEventListener('keyup', this.handleKey, true);
    }

    public unbindMouseEvents() {
        document.removeEventListener('mousemove', this.handleMouse);
        document.removeEventListener('mousedown', this.handleMouse);
        document.removeEventListener('mouseup', this.handleMouse);
    }

    public unbindKeyboardEvents() {
        document.removeEventListener('keydown', this.handleKey, true);
        document.removeEventListener('keyup', this.handleKey, true);
    }

    private handleMouse = (event: MouseEvent) => {
        this.update(event);
    }

    private handleKey = (event: KeyboardEvent) => {
        if (this.isFirefox && event.code && event.code.indexOf('Arrow') !== -1) {
            return;
        }

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
