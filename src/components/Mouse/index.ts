import { html } from 'htm/preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { block } from '../../utils/css/bem';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { passiveSupported } from '../../utils/passiveSupported';
import { i18n } from '../../i18n';

import './index.css';

const b = block('mouse');

export function Mouse() {
    const [wheelY, setWheelY] = useState(0);

    const forceUpdate = useForceUpdate();

    const buttons = useRef<Record<string, boolean>>({});
    const refRoot = useRef<HTMLDivElement>();

    useEffect(() => {
        const handleScroll = (e: Event) => {
            e.preventDefault();
        };

        const handleMouseDown = (e: MouseEvent) => {
            buttons.current[e.button] = true;
            forceUpdate();
        };

        const handleMouseUp = (e: MouseEvent) => {
            buttons.current[e.button] = false;
            forceUpdate();
        };

        document.addEventListener('contextmenu', handleScroll);
        document.addEventListener('scroll', handleScroll);

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('contextmenu', handleScroll);
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            setWheelY(wheelY - e.deltaY);
        };

        refRoot.current?.addEventListener('wheel', handleWheel, passiveSupported ? { passive: false } : false);

        return () => {
            refRoot.current?.removeEventListener('wheel', handleWheel);
        };
    }, [wheelY]);

    return html`
        <div ref="${refRoot}" class="${b()}" title="${i18n('Mouse')}">
            <div class="${b('body')}">
                <div class="${b('left-button', { pressed: buttons.current[0] })}" title="${i18n('Left mouse button')}">
                    <div class="${b('text')}">${i18n('Left mouse button')}</div>
                </div>
                <div class="${b('middle-button', { pressed: buttons.current[1] })}">
                    <div class="${b('wheel')}" style="background-position-y:${wheelY}px" title="${i18n('Middle mouse button and mouse wheel')}"></div>
                    <div class="${b('text')}">${i18n('Middle mouse button and mouse wheel')}</div>
                </div>
                <div class="${b('right-button', { pressed: buttons.current[2] })}" title="${i18n('Right mouse button')}">
                    <div class="${b('text')}">${i18n('Right mouse button')}</div>
                </div>
                <div class="${b('4-button', { pressed: buttons.current[3] })}" title="${i18n('Additional mouse button 4')}">
                    <div class="${b('text')}">${i18n('Additional mouse button 4')}</div>
                </div>
                <div class="${b('5-button', { pressed: buttons.current[4] })}" title="${i18n('Additional mouse button 5')}">
                    <div class="${b('text')}">${i18n('Additional mouse button 5')}</div>
                </div>
            </div>
        </div>
    `;
}
