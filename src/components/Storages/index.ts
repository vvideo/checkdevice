import { html } from 'htm/preact';
import { List } from '../List';
import { getChecked } from '../../utils/getChecked';
import { StorageFeatures } from '../StorageFeatures';
import { block } from '../../utils/bem';

import './index.css';
import { ExtLink } from '../ExtLink';
import { i18n } from '../../i18n/i18n';

const mdnLinks = {
    cookies: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled',
    sessionStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage',
    localStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
    indexeddb: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    opfs: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system',
}

const b = block('storages');

export function Storages() {
    const hasOPFS = typeof navigator.storage?.getDirectory === 'function';
    const items = [
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.cookies}">Cookies<//>`,
            getChecked(navigator.cookieEnabled)
        ],
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.localStorage}">Local storage<//>`,
            getChecked(Boolean(window.localStorage))
        ],
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.sessionStorage}">Session storage<//>`,
            getChecked(Boolean(window.sessionStorage))
        ],
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.indexeddb}">IndexedDB<//>`,
            getChecked(Boolean(window.indexedDB))
        ],
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.opfs}">Origin private file system<//>`,
            getChecked(hasOPFS)
        ],
    ];

    return html`
        <div class="${b()}">
            <${List} title="${i18n('Storages')}" items="${items}" />

            <div class="${b('features')}">
                <${StorageFeatures}><//>
            </div>
        </div>
    `;
}



