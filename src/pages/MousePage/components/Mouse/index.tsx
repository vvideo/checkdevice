import { h } from 'preact';

import { useEffect, useRef, useState } from 'preact/hooks';
import { block } from '../../../../utils/css/bem';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import { passiveSupported } from '../../../../utils/passiveSupported';
import { i18n } from '../../../../i18n';
import { prepareDeltaY } from './utils';

import './index.css';

const b = block('mouse');

//const DBL_CLICK_TIMEOUT = 300;
const WHEEL_ARROW_TIMEOUT = 250;

export function Mouse() {
    const [wheelY, setWheelY] = useState(0);
    const [wheelArrowUp, setWheelArrowUp] = useState(false);
    const [wheelArrowDown, setWheelArrowDown] = useState(false);

    const forceUpdate = useForceUpdate();

    const buttons = useRef<Record<string, boolean>>({});
    // const dblClicks = useRef<Record<number, boolean>>({});
    // const dblClickTimers = useRef<Record<number, number>>({});
    const wheelArrowUpTimer = useRef<number>(0);
    const wheelArrowDownTimer = useRef<number>(0);

    const refRoot = useRef<HTMLDivElement>(null);

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

        const handleMouseClick = (e: MouseEvent) => {
            // Additional buttons
            if (e.button === 3 || e.button === 4) {
                e.preventDefault();
            }
        };

        // const handleDblClick = (e: MouseEvent) => {
        //     const { button } = e;

        //     dblClicks.current[button] = true;
        //     const timer = dblClickTimers.current[button];
        //     if (timer) {
        //         clearTimeout(timer);
        //     }

        //     dblClickTimers.current[button] = setTimeout(() => {
        //         dblClicks.current[button] = false;
        //         forceUpdate();
        //     }, DBL_CLICK_TIMEOUT);

        //     forceUpdate();
        // };

        document.addEventListener('contextmenu', handleScroll);
        document.addEventListener('scroll', handleScroll);

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('click', handleMouseClick);

        // document.addEventListener('dblclick', handleDblClick);

        return () => {
            document.removeEventListener('contextmenu', handleScroll);
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('click', handleMouseClick);
        };
    }, []);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const deltaY = prepareDeltaY(e);
            setWheelY(wheelY + deltaY);

            if (deltaY < 0) {
                setWheelArrowUp(true);
                setWheelArrowDown(false);
                if (wheelArrowUpTimer.current) {
                    clearTimeout(wheelArrowUpTimer.current);
                }

                wheelArrowUpTimer.current = setTimeout(() => {
                    setWheelArrowUp(false);
                }, WHEEL_ARROW_TIMEOUT);
            } else {
                setWheelArrowDown(true);
                setWheelArrowUp(false);
                if (wheelArrowDownTimer.current) {
                    clearTimeout(wheelArrowDownTimer.current);
                }

                wheelArrowDownTimer.current = setTimeout(() => {
                    setWheelArrowDown(false);
                }, WHEEL_ARROW_TIMEOUT);
            }
        };

        refRoot.current?.addEventListener('wheel', handleWheel, passiveSupported ? { passive: false } : false);

        return () => {
            refRoot.current?.removeEventListener('wheel', handleWheel);
        };
    }, [wheelY]);

    return (
        <div ref={refRoot} class={b()}>
            <div class={b('body')} title={i18n('Mouse')}>
                <div class={b('left-button', { pressed: buttons.current[0], /*dblClick: dblClicks.current[0]*/ })} title={i18n('Left mouse button')}>
                    <div class={b('text')}>{i18n('Left mouse button')}</div>
                </div>
                <div class={b('middle-button', { pressed: buttons.current[1], /*dblClick: dblClicks.current[1]*/ })}>
                    <div class={b('wheel')} style={`background-position-y:${wheelY}px`} title={i18n('Middle mouse button and mouse wheel')}></div>
                    <div class={b('text')}>{i18n('Middle mouse button and mouse wheel')}</div>
                </div>
                <div class={b('wheel-arrow-up', { hidden: !wheelArrowUp })}></div>
                <div class={b('wheel-arrow-down', { hidden: !wheelArrowDown })}></div>

                <div class={b('right-button', { pressed: buttons.current[2], /*dblClick: dblClicks.current[2]*/ })} title={i18n('Right mouse button')}>
                    <div class={b('text')}>{i18n('Right mouse button')}</div>
                </div>
                <div class={b('4-button', { pressed: buttons.current[3], /*dblClick: dblClicks.current[3]*/ })} title={i18n('Additional mouse button 4')}>
                    <div class={b('text')}>{i18n('Additional mouse button 4')}</div>
                </div>
                <div class={b('5-button', { pressed: buttons.current[4], /*dblClick: dblClicks.current[4]*/ })} title={i18n('Additional mouse button 5')}>
                    <div class={b('text')}>{i18n('Additional mouse button 5')}</div>
                </div>
            </div>
        </div>
    );
}
