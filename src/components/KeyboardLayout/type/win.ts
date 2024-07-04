import { KeyboardLayoutData, KeyboardRowData } from '..';

import './win.css';

const row0: KeyboardRowData = [
    {
        code: 'Escape',
        text: 'ESC'
    },
    {
        type: 'spacer',
        name: 'between-func'
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
        type: 'spacer',
        name: 'between-func'
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
        type: 'spacer',
        name: 'between-func'
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
        type: 'spacer',
        name: 'before-sys'
    },
    {
        code: 'PrintScreen',
        text: 'PRINT SCRN',
        fontSize: 'small'
    },
    {
        code: 'ScrollLock',
        text: 'SCROLL LOCK',
        fontSize: 'small'
    },
    {
        code: 'PauseBreak',
        text: 'PAUSE BREAK',
        fontSize: 'small'
    },
    {
        type: 'spacer',
        name: 'before-numpad'
    },
    {
        code: 'MediaPlayPause',
        text: '⏯',
        view: 'circle'
    },
    {
        code: 'MediaStop',
        text: '⏹',
        view: 'circle'
    },
    {
        code: 'MediaTrackPrevious',
        text: '⏮',
        view: 'circle'
    },
    {
        code: 'MediaTrackNext',
        text: '⏭',
        view: 'circle'
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
        text: '←'
    },
    {
        type: 'spacer',
        name: 'before-sys'
    },
    {
        code: 'Insert',
        text: 'INSERT',
        fontSize: 'small'
    },
    {
        code: 'Home',
        text: 'HOME',
        fontSize: 'small'
    },
    {
        code: 'PageUp',
        text: 'PAGE UP',
        fontSize: 'small'
    },
    {
        type: 'spacer',
        name: 'before-numpad'
    },
    {
        code: 'NumLock',
        text: 'NUM LOCK',
        fontSize: 'small'
    },
    {
        code: 'NumpadDivide',
        text: '/'
    },
    {
        code: 'NumpadMultiply',
        text: '*'
    },
    {
        code: 'NumpadSubtract',
        text: '-'
    }
];

const row2: KeyboardRowData = [
    {
        code: 'Tab',
        text: 'TAB ⇥',
        fontSize: 'small'
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
    {
        type: 'spacer',
        name: 'before-sys'
    },
    {
        code: 'Delete',
        text: 'DELETE',
        fontSize: 'small'
    },
    {
        code: 'End',
        text: 'END',
        fontSize: 'small'
    },
    {
        code: 'PageDown',
        text: 'PAGE DOWN',
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
        code: 'NumpadAdd',
        text: '+'
    }
];

const row3: KeyboardRowData = [
    {
        code: 'CapsLock',
        text: 'CAPS LOCK',
        fontSize: 'small'
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
    }
];

const row4: KeyboardRowData = [
    {
        code: 'ShiftLeft',
        text: 'SHIFT',
        fontSize: 'small'
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
        text: 'SHIFT',
        fontSize: 'small'
    },
    {
        type: 'spacer',
        name: 'before-arrow-up'
    },
    {
        code: 'ArrowUp',
        text: '↑'
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
        text: 'ENTER',
        fontSize: 'small'
    },
];

const row5: KeyboardRowData = [
    {
        code: 'ControlLeft',
        text: 'CTRL',
        fontSize: 'small'
    },
    {
        code: 'MetaLeft',
        topLeftSymbol: ' ',
        topRightSymbol: ' ',
        bottomLeftSymbol: ' ',
        bottomRightSymbol: ' '
    },
    {
        code: 'AltLeft',
        text: 'ALT',
        fontSize: 'small'
    },
    {
        code: 'Space'
    },
    {
        code: 'AltRight',
        text: 'ALTGR',
        fontSize: 'small'
    },
    {
        code: 'MetaRight',
        topLeftSymbol: ' ',
        topRightSymbol: ' ',
        bottomLeftSymbol: ' ',
        bottomRightSymbol: ' '
    },
    {
        code: 'ContextMenu',
        text: '□',
    },
    {
        code: 'ControlRight',
        text: 'CTRL',
        fontSize: 'small'
    },
    {
        type: 'spacer',
        name: 'before-arrows'
    },
    {
        code: 'ArrowLeft',
        text: '←'
    },
    {
        code: 'ArrowDown',
        text: '↓'
    },
    {
        code: 'ArrowRight',
        text: '→'
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

const row6: KeyboardRowData = [
    {
        type: 'led',
        code: 'CapsLock'
    },
    {
        type: 'led',
        code: 'ScrollLock'
    },
    {
        type: 'led',
        code: 'NumLock'
    }
];

export const winKeyboardLayout: KeyboardLayoutData = {
    type: 'win',
    rows: [
        row0,
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
    ]
};
