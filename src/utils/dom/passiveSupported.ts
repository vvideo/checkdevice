import { noop } from '../function/noop';

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#safely_detecting_option_support
export let passiveSupported = false;

try {
    const options = {
        get passive() {
            passiveSupported = true;
            return false;
        },
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('test', noop, options);
        window.removeEventListener('test', noop, {});
    }
} catch {
    passiveSupported = false;
}
