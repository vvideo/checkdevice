import { html } from 'htm/preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { useForceUpdate } from '../../hooks/useForceUpdate';

import './index.css';

const b = block('mouse');

const MAX_X = 200;
const MAX_Y = 100;

export function Mouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const forceUpdate = useForceUpdate();

    const buttons = useRef<Record<string, boolean>>({});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setX(e.pageX / screen.width * MAX_X);
            setY(e.pageY / screen.height * MAX_Y);
        };

        const handleContextMenu = (e: Event) => {
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

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const style = `transform:translate(${x}px,${y}px)`;

    return html`
        <div class="${b()}">
            <div class="${b('pad')}"></div>
            <div class="${b('body')}" style="${style}">
                <div class="${b('left-button', { pressed: buttons.current[0] })}"></div>
                <div class="${b('middle-button', { pressed: buttons.current[1] })}"></div>
                <div class="${b('right-button', { pressed: buttons.current[2] })}"></div>
                <div class="${b('4-button', { pressed: buttons.current[3] })}"></div>
                <div class="${b('5-button', { pressed: buttons.current[4] })}"></div>
            </div>
        </div>
    `;
}
