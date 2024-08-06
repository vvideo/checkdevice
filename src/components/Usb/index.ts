import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Button } from '../Button';
import { WarningMessage } from '../WarningMessage';
import { TreeList } from '../TreeList';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n';

import './index.css';

const b = block('usb');

export function Usb() {
    const [usbDevice, setUsbDevice] = useState<USBDevice | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const handleClick = useCallback(() => {
        navigator.usb.requestDevice({ filters: [] }).then(device => {
            setError(null);

            const result = {};
            for (const key in device) {
                // @ts-ignore
                result[key] = device[key];
                //console.log(key, device.hasOwnProperty(key));
            }

            setUsbDevice(result);
            console.log(result);
        }).catch(error => {
            setError(error);
            console.log(error);
        });
    }, []);

    if (!navigator.usb || typeof navigator.usb.requestDevice !== 'function') {
        return html`<${WarningMessage}>${i18n('WebUSB API is not supported.')}<//>`;
    }

    return html`<div class="${b()}">
        <div class="${b('controls')}">
            <${Button} theme="active" onClick="${handleClick}">${i18n('Select USB device')}<//>
        </div>

        <${UsbError} error="${error}" //>

        ${usbDevice ? html`<div class="${b('info')}">
            <${TreeList} data="${usbDevice}" //>
        </div>` : ''}
    </div>`;
}

interface UsbErrorProps {
    error: Error;
}

function UsbError(props: UsbErrorProps) {
    const { error } = props;

    if (!error) {
        return '';
    }
    
    if (error.name === 'NotFoundError') {
        return html`<${WarningMessage}>${i18n('USB device not found.')}<//>`;
    }

    if (error.name === 'NotAllowedError') {
        return html`<${WarningMessage}>${i18n('USB device is blocked.')}<//>`;
    }

    return html`<${WarningMessage}>${error.message}<//>`;
}
