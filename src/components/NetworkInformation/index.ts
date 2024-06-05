import { html } from 'htm/preact';
import { WarningMessage } from '../WarningMessage';
import { block } from '../../utils/bem';
import { TreeList } from '../TreeList';
import { i18n } from '../../i18n/i18n';
import { InfoLink } from '../InfoLink';

import './index.css';

const b = block('network-information');

export function NetworkInformation() {
    if (!navigator.connection) {
        return html`
            <div class="${b()}">
                 <${WarningMessage}>${i18n('Network Information API is not supported.')}<//>
            </div>`;
    }

    const { connection } = navigator;

    const data: Navigator['connection'] = {
        downlink: connection.downlink,
        effectiveType: connection.effectiveType,
        rtt: connection.rtt,
        saveData: connection.saveData,
    };

    if ('type' in connection) {
        data.type = connection.type;
    }

    if ('downlinkMax' in connection) {
        data.downlinkMax = connection.downlinkMax;
    }

    const title = html`navigator.connection<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>`;

    return html`
        <div class="${b()}">
            <${TreeList} title="${title}" data="${data}"><//>
        </div>`;
}