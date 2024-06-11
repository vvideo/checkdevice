import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { TreeList } from '../TreeList';

const b = block('connection-navigator');

export function ConnectionNavigator() {
    if (!navigator.connection) {
        return '';
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

    return html`
        <div class="${b()}">
            <${TreeList} title="navigator.connection" data="${data}"><//>
        </div>`;
}