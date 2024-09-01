import { h } from 'preact';
import { i18n } from '../../../../i18n';
import { XboxButtons } from '../XboxButtons';
import { Spinner } from '../../../../components/ui/Spinner';

export function GamepadWait() {
    return (
        <div>
            <Spinner size="s" /> {i18n('Connect and press any button on the gamepad.')} <XboxButtons />
        </div>
    );
}
