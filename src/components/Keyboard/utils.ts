import { KeysState } from '.';

export function prepareKeyboardCode(code: string, key: string) {
    if (code === 'IntlBackslash' && (key === '`' || key === '~')) {
        return 'Backquote';
    } else if (code === 'Backquote' && (key === '§' || key === '±')) {
        return 'IntlBackslash';
    }

    return code;
}

export function clearPressedStatus(keysState: KeysState) {
    Object.keys(keysState).forEach(key => {
        keysState[key].pressed = false;
    });
}
