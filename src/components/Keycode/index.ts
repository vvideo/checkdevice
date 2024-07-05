import { html  } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { TreeList } from '../TreeList';

import './index.css';

export const b = block('keycode');

function getEventList(event?: KeyboardEvent) {
    const items = event ? {
        key: event.key,
        code: event.code,
        keyCode: event.keyCode,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        shiftKey: event.shiftKey,
        metaKey: event.metaKey,
        charCode: event.charCode,
        which: event.which,
        repeat: event.repeat,
        location: event.location,
    } : {};

    return items;
}

function getKeyTitle(event: KeyboardEvent) {
    return String(event.code || event.key || event.keyCode);
}

export function Keycode() {
    const [key, setKey] = useState('');
    const [pressed, setPressed] = useState(false);
    const [keydownEvent, setKeydownEvent] = useState<KeyboardEvent | undefined>();
    const [keyupEvent, setKeyupEvent] = useState<KeyboardEvent | undefined>();

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            setKeydownEvent(event);
            setKey(getKeyTitle(event));
            setKeyupEvent(undefined);
            setPressed(true);
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            setKey(getKeyTitle(event));
            setKeyupEvent(event);
            setPressed(false);
        };

        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const keydownItems = getEventList(keydownEvent);
    const keyupItems = getEventList(keyupEvent);

    return html`
        <div class="${b()}">
            <div class="${b('description')}">${i18n('Press a key to display its code.')}</div>
            ${key ? html`<div class="${b('key', { pressed })}">${key}</div>` : ''}
            <div class="${b('events')}">
                <div class="${b('keydown')}">
                    <${TreeList} data=${keydownItems} title="keydown event" //>
                </div>
                <div class="${b('keyup')}">
                    <${TreeList} data=${keyupItems} title="keyup event" //>
                </div>
            </div>
        </div>
    `;
}
