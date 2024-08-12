import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Button } from '../Button';
import { WarningMessage } from '../WarningMessage';
import { TreeList } from '../TreeList';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n';
import { UsbError } from '../UsbError';
import { sortObject } from '../../utils/object/sortObject';
import { isSsr } from '../../utils/isSsr';

import './index.css';

const b = block('usb');

export function Usb() {
    const [usbDevice, setUsbDevice] = useState<Record<string, unknown> | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const handleClick = useCallback(() => {
        navigator.usb.requestDevice({ filters: [] }).then(data => {
            setError(null);

            const result: Record<string, unknown> = {};
            const device = data as unknown as Record<string, unknown>;

            for (const key in device) {
                if (
                    typeof device[key] === 'function' ||
                    key === 'configuration' ||
                    key === 'configurations'
                ) {
                    continue;
                }

                result[key] = device[key];
            }

            setUsbDevice(sortObject(result));
        }).catch(error => {
            setError(error);
            console.log(error);
        });
    }, []);

    if (!isSsr && (!navigator.usb || typeof navigator.usb.requestDevice !== 'function')) {
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
