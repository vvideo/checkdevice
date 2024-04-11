import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';

export function Connection() {
    const connection = navigator.connection;
    if (!connection) {
        return '';
    }

    const items = [
        ['downlink', connection.downlink],
        ['effectiveType', connection.effectiveType],
        ['rtt', connection.rtt],
        ['saveData', connection.saveData],
    ];

    return html`<${List} title="${i18n('Connection')}" items="${items}"><//>`;
}
