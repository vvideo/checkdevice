export class KeyboardLedController {
    public on() {
        document.addEventListener('mousemove', this.handleMouse);
        document.addEventListener('mousedown', this.handleMouse);
        document.addEventListener('mouseup', this.handleMouse);
        document.addEventListener('keydown', this.handleKey);
        document.addEventListener('keyup', this.handleKey);
    }

    public off() {
        document.removeEventListener('mousemove', this.handleMouse);
        document.removeEventListener('mousedown', this.handleMouse);
        document.removeEventListener('mouseup', this.handleMouse);
        document.removeEventListener('keydown', this.handleKey);
        document.removeEventListener('keyup', this.handleKey);
    }

    public capsLock = false;

    private handleMouse = (event: MouseEvent) => {
        this.update(event);
    }

    private handleKey = (event: KeyboardEvent) => {
        this.update(event);
    }

    private update(event: KeyboardEvent | MouseEvent) {
        if (event.getModifierState) {
            this.capsLock = event.getModifierState('CapsLock');
        }
    }
}

export const keyboardLedController = new KeyboardLedController();
