import { KeyboardLayoutData, KeyboardRowData } from '..';

import './macbook.css';

const row0: KeyboardRowData = [
    {
        code: 'Escape',
        text: 'esc',
        align: 'left'
    },
    {
        code: 'F1',
        text: 'F1'
    },
    {
        code: 'F2',
        text: 'F2'
    },
    {
        code: 'F3',
        text: 'F3'
    },
    {
        code: 'F4',
        text: 'F4'
    },
    {
        code: 'F5',
        text: 'F5'
    },
    {
        code: 'F6',
        text: 'F6'
    },
    {
        code: 'F7',
        text: 'F7'
    },
    {
        code: 'F8',
        text: 'F8'
    },
    {
        code: 'F9',
        text: 'F9'
    },
    {
        code: 'F10',
        text: 'F10'
    },
    {
        code: 'F11',
        text: 'F11'
    },
    {
        code: 'F12',
        text: 'F12'
    },
    {
        code: 'PowerOff',
    }
];

const row1: KeyboardRowData = [
    {
        code: 'IntlBackslash',
        topLeftSymbol: '±',
        topRightSymbol: '<',
        bottomLeftSymbol: '§',
        bottomRightSymbol: '>',
    },
    {
        code: 'Digit1',
        topSymbol: '!',
        bottomSymbol: '1'
    },
    {
        code: 'Digit2',
        topSymbol: '@',
        bottomSymbol: '2'
    },
    {
        code: 'Digit3',
        topSymbol: '#',
        bottomSymbol: '3'
    },
    {
        code: 'Digit4',
        topSymbol: '$',
        bottomSymbol: '4'
    },
    {
        code: 'Digit5',
        topSymbol: '%',
        bottomSymbol: '5'
    },
    {
        code: 'Digit6',
        topSymbol: '^',
        bottomSymbol: '6'
    },
    {
        code: 'Digit7',
        topSymbol: '&',
        bottomSymbol: '7'
    },
    {
        code: 'Digit8',
        topSymbol: '*',
        bottomSymbol: '8'
    },
    {
        code: 'Digit9',
        topSymbol: '(',
        bottomSymbol: '9'
    },
    {
        code: 'Digit0',
        topSymbol: ')',
        bottomSymbol: '0'
    },
    {
        code: 'Minus',
        topSymbol: '_',
        bottomSymbol: '-'
    },
    {
        code: 'Equal',
        topSymbol: '+',
        bottomSymbol: '='
    },
    {
        code: 'Backspace',
        bottomRightSymbol: '⌫'
    },
];

const row2: KeyboardRowData = [
    {
        code: 'Tab',
        bottomLeftSymbol: '⇥'
    },
    {
        code: 'KeyQ',
        text: 'Q'
    },
    {
        code: 'KeyW',
        text: 'W'
    },
    {
        code: 'KeyE',
        text: 'E'
    },
    {
        code: 'KeyR',
        text: 'R'
    },
    {
        code: 'KeyT',
        text: 'T'
    },
    {
        code: 'KeyY',
        text: 'Y'
    },
    {
        code: 'KeyU',
        text: 'U'
    },
    {
        code: 'KeyI',
        text: 'I'
    },
    {
        code: 'KeyO',
        text: 'O'
    },
    {
        code: 'KeyP',
        text: 'P'
    },
    {
        code: 'BracketLeft',
        topSymbol: '{',
        bottomSymbol: '['
    },
    {
        code: 'BracketRight',
        topSymbol: '}',
        bottomSymbol: ']'
    },
    {
        code: 'Enter',
        text: '⏎'
    },
];

const row3: KeyboardRowData = [
    {
        code: 'CapsLock',
        bottomLeftSymbol: '⇪',
        led: true
    },
    {
        code: 'KeyA',
        text: 'A'
    },
    {
        code: 'KeyS',
        text: 'S'
    },
    {
        code: 'KeyD',
        text: 'D'
    },
    {
        code: 'KeyF',
        text: 'F'
    },
    {
        code: 'KeyG',
        text: 'G'
    },
    {
        code: 'KeyH',
        text: 'H'
    },
    {
        code: 'KeyJ',
        text: 'J'
    },
    {
        code: 'KeyK',
        text: 'K'
    },
    {
        code: 'KeyL',
        text: 'L'
    },
    {
        code: 'Semicolon',
        topSymbol: ':',
        bottomSymbol: ';'
    },
    {
        code: 'Quote',
        topSymbol: '"',
        bottomSymbol: '\''
    },
    {
        code: 'Backslash',
        topSymbol: '|',
        bottomSymbol: '\\'
    },
];

const row4: KeyboardRowData = [
    {
        code: 'ShiftLeft',
        bottomText: 'shift',
        align: 'left'
    },
    {
        code: 'Backquote',
        topSymbol: '~',
        bottomSymbol: '`'
    },
    {
        code: 'KeyZ',
        text: 'Z'
    },
    {
        code: 'KeyX',
        text: 'X'
    },
    {
        code: 'KeyC',
        text: 'C'
    },
    {
        code: 'KeyV',
        text: 'V'
    },
    {
        code: 'KeyB',
        text: 'B'
    },
    {
        code: 'KeyN',
        text: 'N'
    },
    {
        code: 'KeyM',
        text: 'M'
    },
    {
        code: 'Comma',
        topSymbol: '<',
        bottomSymbol: ','
    },
    {
        code: 'Period',
        topSymbol: '>',
        bottomSymbol: '.'
    },
    {
        code: 'Slash',
        topSymbol: '?',
        bottomSymbol: '/'
    },
    {
        code: 'ShiftRight',
        bottomText: 'shift',
        align: 'right'
    },
];

const row5: KeyboardRowData = [
    {
        code: 'Fn',
        topRightSymbol: 'fn',
        bottomLeftSymbol: '🌐'
    },
    {
        code: 'ControlLeft',
        topRightSymbol: '^',
        bottomText: 'control'
    },
    {
        code: 'AltLeft',
        topRightSymbol: '⌥',
        bottomText: 'option'
    },
    {
        code: 'MetaLeft',
        topRightSymbol: '⌘',
        bottomText: 'command'
    },
    {
        code: 'Space'
    },
    {
        code: 'MetaRight',
        topLeftSymbol: '⌘',
        bottomText: 'command'
    },
    {
        code: 'AltRight',
        topLeftSymbol: '⌥',
        bottomText: 'option'
    },
    {
        code: 'ArrowLeft'
    },
    {
        code: 'ArrowDown'
    },
    {
        code: 'ArrowUp'
    },
    {
        code: 'ArrowRight'
    },
];

export const macbookKeyboardLayout: KeyboardLayoutData = {
    type: 'macbook',
    rows: [
        row0,
        row1,
        row2,
        row3,
        row4,
        row5,
    ]
};
