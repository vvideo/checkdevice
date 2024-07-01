import { KeyboardLayout, RowOfKeys } from '.';

import './mac.css';

const row0: RowOfKeys = [
    {
        code: 'Escape',
        name: 'esc'
    },
    {
        code: 'F1',
        name: 'F1'
    },
    {
        code: 'F2',
        name: 'F2'
    },
    {
        code: 'F3',
        name: 'F3'
    },
    {
        code: 'F4',
        name: 'F4'
    },
    {
        code: 'F5',
        name: 'F5'
    },
    {
        code: 'F6',
        name: 'F6'
    },
    {
        code: 'F7',
        name: 'F7'
    },
    {
        code: 'F8',
        name: 'F8'
    },
    {
        code: 'F9',
        name: 'F9'
    },
    {
        code: 'F10',
        name: 'F10'
    },
    {
        code: 'F11',
        name: 'F11'
    },
    {
        code: 'F12',
        name: 'F12'
    },
    {
        code: 'PowerOff',
        name: ''
    }
];

const row1: RowOfKeys = [
    {
        code: 'Backquote',
        name: '§'
    },
    {
        code: 'Digit1',
        name: '1'
    },
    {
        code: 'Digit2',
        name: '2'
    },
    {
        code: 'Digit3',
        name: '3'
    },
    {
        code: 'Digit4',
        name: '4'
    },
    {
        code: 'Digit5',
        name: '5'
    },
    {
        code: 'Digit6',
        name: '6'
    },
    {
        code: 'Digit7',
        name: '7'
    },
    {
        code: 'Digit8',
        name: '8'
    },
    {
        code: 'Digit9',
        name: '9'
    },
    {
        code: 'Digit0',
        name: '0'
    },
    {
        code: 'Minus',
        name: '-'
    },
    {
        code: 'Equal',
        name: '='
    },
    {
        code: 'Backspace',
        name: '⌫'
    },
];

const row2: RowOfKeys = [
    {
        code: 'Tab',
        name: '⇥'
    },
    {
        code: 'KeyQ',
        name: 'Q'
    },
    {
        code: 'KeyW',
        name: 'W'
    },
    {
        code: 'KeyE',
        name: 'E'
    },
    {
        code: 'KeyR',
        name: 'R'
    },
    {
        code: 'KeyT',
        name: 'T'
    },
    {
        code: 'KeyY',
        name: 'Y'
    },
    {
        code: 'KeyU',
        name: 'U'
    },
    {
        code: 'KeyI',
        name: 'I'
    },
    {
        code: 'KeyO',
        name: 'O'
    },
    {
        code: 'KeyP',
        name: 'P'
    },
    {
        code: 'BracketLeft',
        name: '['
    },
    {
        code: 'BracketRight',
        name: ']'
    },
    {
        code: 'Enter',
        name: '⏎'
    },
];

const row3: RowOfKeys = [
    {
        code: 'CapsLock',
        name: '⇪'
    },
    {
        code: 'KeyA',
        name: 'A'
    },
    {
        code: 'KeyS',
        name: 'S'
    },
    {
        code: 'KeyD',
        name: 'D'
    },
    {
        code: 'KeyF',
        name: 'F'
    },
    {
        code: 'KeyG',
        name: 'G'
    },
    {
        code: 'KeyH',
        name: 'H'
    },
    {
        code: 'KeyJ',
        name: 'J'
    },
    {
        code: 'KeyK',
        name: 'K'
    },
    {
        code: 'KeyL',
        name: 'L'
    },
    {
        code: 'Semicolon',
        name: ';'
    },
    {
        code: 'Quote',
        name: '\''
    },
    {
        code: 'Backslash',
        name: '\\'
    },
];

const row4: RowOfKeys = [
    {
        code: 'ShiftLeft',
        name: 'shift'
    },
    {
        code: 'IntlBackslash',
        name: '`'
    },
    {
        code: 'KeyZ',
        name: 'Z'
    },
    {
        code: 'KeyX',
        name: 'X'
    },
    {
        code: 'KeyC',
        name: 'C'
    },
    {
        code: 'KeyV',
        name: 'V'
    },
    {
        code: 'KeyB',
        name: 'B'
    },
    {
        code: 'KeyN',
        name: 'N'
    },
    {
        code: 'KeyM',
        name: 'M'
    },
    {
        code: 'Comma',
        name: ','
    },
    {
        code: 'Period',
        name: '.'
    },
    {
        code: 'Slash',
        name: '/'
    },
    {
        code: 'ShiftRight',
        name: 'shift'
    },
];

const row5: RowOfKeys = [
    {
        code: 'Fn',
        name: 'fn'
    },
    {
        code: 'ControlLeft',
        name: 'control'
    },
    {
        code: 'AltLeft',
        name: 'option'
    },
    {
        code: 'MetaLeft',
        name: 'command'
    },
    {
        code: 'Space',
        name: ''
    },
    {
        code: 'MetaRight',
        name: 'command' // ⌘
    },
    {
        code: 'AltRight',
        name: 'option'
    },
    {
        code: 'ArrowLeft',
        name: ''
    },
    {
        code: 'ArrowDown',
        name: ''
    },
    {
        code: 'ArrowUp',
        name: ''
    },
    {
        code: 'ArrowRight',
        name: ''
    },
];

export const macKeyboardLayout: KeyboardLayout = [
    row0,
    row1,
    row2,
    row3,
    row4,
    row5,
];
