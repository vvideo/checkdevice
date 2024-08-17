import { KeyboardLayoutData, KeyboardRowData } from '..';

import './mac.css';

const row0: KeyboardRowData = [
    {
        code: 'Escape',
        bottomText: 'esc',
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
    },
    {
        type: 'spacer',
        name: 'before-sys'
    },
    {
        code: 'F13',
        text: 'F13'
    },
    {
        code: 'F14',
        text: 'F14'
    },
    {
        code: 'F15',
        text: 'F15'
    },
    {
        type: 'spacer',
        name: 'before-numpad'
    },
    {
        code: 'F16',
        text: 'F16'
    },
    {
        code: 'F17',
        text: 'F17'
    },
    {
        code: 'F18',
        text: 'F18'
    },
    {
        code: 'F19',
        text: 'F19'
    }
];

const row1: KeyboardRowData = [
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
    {
        type: 'spacer',
        name: 'before-sys'
    },
    {
        code: 'Fn',
        bottomRightSymbol: 'fn',
        text: '🌐'
    },
    {
        code: 'Home',
        text: 'home',
        fontSize: 'small'
    },
    {
        code: 'PageUp',
        text: 'page up',
        fontSize: 'small'
    },
    {
        type: 'spacer',
        name: 'before-numpad'
    },
    {
        code: 'Clear',
        text: 'clear',
        fontSize: 'small'
    },
    {
        code: 'NumpadEqual',
        text: '='
    },
    {
        code: 'NumpadDivide',
        text: '/'
    },
    {
        code: 'NumpadMultiply',
        text: '*'
    }
];

const row2: KeyboardRowData = [
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
    },
    {
        type: 'spacer',
        name: 'before-sys'
    },
    {
        code: 'Delete',
        text: '⌫',
        fontSize: 'small'
    },
    {
        code: 'End',
        text: 'end',
        fontSize: 'small'
    },
    {
        code: 'PageDown',
        text: 'page down',
        fontSize: 'small'
    },
    {
        type: 'spacer',
        name: 'before-numpad'
    },
    {
        code: 'Numpad7',
        text: '7'
    },
    {
        code: 'Numpad8',
        text: '8'
    },
    {
        code: 'Numpad9',
        text: '9'
    },
    {
        code: 'NumpadSubtract',
        text: '-'
    }
];

const row3: KeyboardRowData = [
    {
        code: 'CapsLock',
        bottomText: 'caps lock',
        align: 'left',
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
        code: 'Enter',
        bottomText: 'return',
        align: 'right'
    },
    {
        type: 'spacer',
        name: 'before-numpad-long'
    },
    {
        code: 'Numpad4',
        text: '4'
    },
    {
        code: 'Numpad5',
        text: '5'
    },
    {
        code: 'Numpad6',
        text: '6'
    },
    {
        code: 'NumpadAdd',
        text: '+'
    }
];

const row4: KeyboardRowData = [
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
    {
        type: 'spacer',
        name: 'before-arrow-up'
    },
    {
        code: 'ArrowUp'
    },
    {
        type: 'spacer',
        name: 'after-arrow-up'
    },
    {
        code: 'Numpad1',
        text: '1'
    },
    {
        code: 'Numpad2',
        text: '2'
    },
    {
        code: 'Numpad3',
        text: '3'
    },
    {
        code: 'NumpadEnter',
        bottomText: 'enter',
        fontSize: 'small'
    }
];

const row5: KeyboardRowData = [
    {
        code: 'ControlLeft',
        topRightSymbol: '^',
        bottomText: 'control',
        align: 'right'
    },
    {
        code: 'AltLeft',
        topRightSymbol: '⌥',
        bottomText: 'option',
        align: 'right'
    },
    {
        code: 'MetaLeft',
        topRightSymbol: '⌘',
        bottomText: 'command',
        align: 'right'
    },
    {
        code: 'Space'
    },
    {
        code: 'MetaRight',
        topLeftSymbol: '⌘',
        bottomText: 'command',
        align: 'left'
    },
    {
        code: 'AltRight',
        topLeftSymbol: '⌥',
        bottomText: 'option',
        align: 'left'
    },
    {
        code: 'ControlRight',
        topLeftSymbol: '^',
        bottomText: 'control',
        align: 'left'
    },
    {
        type: 'spacer',
        name: 'before-arrows'
    },
    {
        code: 'ArrowLeft'
    },
    {
        code: 'ArrowDown'
    },
    {
        code: 'ArrowRight'
    },
    {
        type: 'spacer',
        name: 'after-arrows'
    },
    {
        code: 'Numpad0',
        text: '0'
    },
    {
        code: 'NumpadDecimal',
        text: '.'
    }
];

export const macKeyboardLayout: KeyboardLayoutData = {
    type: 'mac',
    rows: [
        row0,
        row1,
        row2,
        row3,
        row4,
        row5,
    ]
};
