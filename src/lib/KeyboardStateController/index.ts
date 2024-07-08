import { keyboardLedController } from '../KeyboardLedController';
import { Signal } from '../Signal';

export interface KeyState {
    pressed: boolean;
    wasPressed: boolean;
    led: boolean;
}

export type KeysState = Record<string, KeyState>;

export class KeyboardStateController {
    private state: KeysState = {};
    private signal = new Signal<string>();

    public destroy() {
        this.unbindEvents();
        this.signal.clearListeners();
        this.state = {};
    }

    public on() {
        this.bindEvents();
    }

    public off() {
        this.unbindEvents();
    }

    public addListener(callback: (code: string) => void) {
        this.signal.addListener(callback);
    }

    public removeListener(callback: (code: string) => void) {
        this.signal.removeListener(callback);
    }

    public setPressed(code: string, value: boolean) {
        this.state[code] = this.state[code] || {};
        this.state[code].pressed = value;

        this.signal.trigger(code);
    }

    public setWasPressed(code: string, value: boolean) {
        this.state[code] = this.state[code] || {};
        this.state[code].wasPressed = value;

        this.signal.trigger(code);
    }

    public setLed(code: string, value: boolean) {
        this.state[code] = this.state[code] || {};
        this.state[code].led = value;

        this.signal.trigger(code);
    }

    public clearPressed() {
        Object.keys(this.state).forEach(code => {
            this.setPressed(code, false);
        });
    }

    public clearState() {
        Object.keys(this.state).forEach(code => {
            this.setPressed(code, false);
            this.setWasPressed(code, false);
        });
    }

    public getKeyState(code: string) {
        return this.state[code] || { pressed: false, wasPressed: false, led: false };
    }

    private bindEvents() {
        document.addEventListener('keydown', this.handleKeydown);
        document.addEventListener('keyup', this.handleKeyup);
        document.addEventListener('blur', this.handleBlur);

        keyboardLedController.addListener(this.handleLed);
    }

    private unbindEvents() {
        document.removeEventListener('keydown', this.handleKeydown);
        document.removeEventListener('keyup', this.handleKeyup);
        document.removeEventListener('blur', this.handleBlur);

        keyboardLedController.removeListener(this.handleLed);
    }

    private handleLed = () => {
        this.setLed('CapsLock', keyboardLedController.capsLock);
        this.setLed('ScrollLock', keyboardLedController.scrollLock);
        this.setLed('NumLock', keyboardLedController.numLock);
    }

    private handleKeydown = (event: KeyboardEvent) => {
        event.preventDefault();

        const code = this.prepareKeyboardCode(event.code, event.key);
        if (event.code !== 'CapsLock') {
            this.setPressed(code, true);
        }

        this.setWasPressed(code, true);
    }

    private handleBlur = () => {
        this.clearPressed();
    }

    private handleKeyup = (event: KeyboardEvent) => {
        event.preventDefault();

        const code = this.prepareKeyboardCode(event.code, event.key);
        this.setPressed(code, false);
        this.setWasPressed(code, true);

        if (code === 'MetaLeft' || code === 'MetaRight') {
            this.clearPressed();
        }
    }

    private prepareKeyboardCode(code: string, key: string) {
        if (code === 'IntlBackslash' && (key === '`' || key === '~')) {
            return 'Backquote';
        } else if (code === 'Backquote' && (key === '§' || key === '±')) {
            return 'IntlBackslash';
        }

        return code;
    }
}

export const keyboardStateController = new KeyboardStateController();
