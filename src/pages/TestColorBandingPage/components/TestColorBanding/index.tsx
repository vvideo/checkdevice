import { h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { block } from '../../../../utils/css/bem';
import { Button } from '../../../../components/ui/Button';
import { i18n } from '../../../../i18n';
import { VK_BACKSPACE, VK_ESC } from '../../../../const/keycodes';

import './index.css';

const b = block('test-color-banding');

const colors = ['red', 'green', 'blue', 'green', 'yellow', 'white'];

export function TestColorBanding() {
    const [isFullScreen, setFullScreen] = useState(false);
    const [step, setStep] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const handleButtonClick = useCallback(() => {
        setStep(0);
        setFullScreen(true);

        if (ref.current) {
            ref.current.requestFullscreen?.();
        }
    }, []);

    const nextColor = useCallback(() => {
        const newStep = step + 1;
        setStep(newStep > colors.length - 1 ? 0 : newStep);
    }, [step]);

    const handleContentClick = useCallback(() => {
        nextColor();
    }, [nextColor]);

    useEffect(() => {
        const handleKeypress = (event: KeyboardEvent) => {
            if (event.keyCode === VK_ESC || event.keyCode === VK_BACKSPACE) {
                setFullScreen(false);
                if (ref.current && document.fullscreenElement) {
                    document.exitFullscreen?.();
                }
            } else {
                nextColor();
            }
        };

        document.addEventListener('keydown', handleKeypress);

        return () => {
            document.removeEventListener('keydown', handleKeypress);
        };
    }, [nextColor, isFullScreen]);

    useEffect(() => {
        const handleFullscreen = () => {
            setFullScreen(false);
        };

        document.addEventListener('fullscreenchange', handleFullscreen);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreen);
        };
    }, []);

    return (
        <div class={b({ fullscreen: isFullScreen })}>
            <Button theme="active" onClick={handleButtonClick}>{i18n('Start test')}</Button>
            <div class={b('content')} ref={ref} style={`background: linear-gradient(to right, black, ${colors[step]})`} onClick={handleContentClick}></div>
        </div>
    );
}
