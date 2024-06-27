import { noop } from './noop';

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#safely_detecting_option_support
export let passiveSupported = false;

try {
    const options = {
        get passive() {
            passiveSupported = true;
            return false;
        },
    };

    window.addEventListener('test', noop, options);
    // @ts-ignore
    window.removeEventListener('test', noop, options);
} catch (e) {
    passiveSupported = false;
}
