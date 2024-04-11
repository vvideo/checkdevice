import { html } from 'htm/preact';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';


export function Platform() {
    const items: Array<[string, any]> = [
        ['userAgent', navigator.userAgent],
        ['platform', navigator.platform],
        ['hardwareConcurrency', navigator.hardwareConcurrency],
        ['deviceMemory', navigator.deviceMemory],
    ];
    
    return html`<${List} title="${i18n('Platform')}" items="${items}" //>`;
}
