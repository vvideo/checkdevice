import { KeyboardLayoutData, KeyboardRowData } from '..';

import './ipad.css';

const row0: KeyboardRowData = [
    {
        code: 'Backquote',
        topSymbol: '~',
        bottomSymbol: '`'
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
        bottomText: 'delete',
        align: 'right'
    },
];

const row1: KeyboardRowData = [
    {
        code: 'Tab',
        bottomText: 'tab',
        align: 'left'
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
        code: 'Backslash',
        topSymbol: '|',
        bottomSymbol: '\\'
    }
];

const row2: KeyboardRowData = [
    {
        code: 'CapsLock',
        bottomText: 'caps lock',
        led: true,
        align: 'left'
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
        code: 'Enter',
        bottomText: 'return',
        align: 'right'
    }
];

const row3: KeyboardRowData = [
    {
        code: 'ShiftLeft',
        bottomText: 'shift',
        align: 'left'
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

const row4: KeyboardRowData = [
    {
        code: 'Fn',
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

export const ipadKeyboardLayout: KeyboardLayoutData = {
    type: 'ipad',
    rows: [
        row0,
        row1,
        row2,
        row3,
        row4,
    ]
};
