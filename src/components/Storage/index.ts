import { html } from 'htm/preact';
import { List } from '../List';
import { getChecked } from '../../utils/getChecked';
import { StorageFeatures } from '../StorageFeatures';
import { block } from '../../utils/css/bem';
import { ExtLink } from '../ui/ExtLink';
import { isSsr } from '../../utils/isSsr';

import './index.css';

const mdnLinks = {
    cookies: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled',
    sessionStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage',
    localStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
    indexeddb: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    opfs: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system',
}

const b = block('storage');

export function Storage() {
    const hasOPFS = !isSsr && typeof navigator.storage?.getDirectory === 'function';
    const items = [
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.cookies}">Cookies<//>`,
            isSsr ? '…' : getChecked(navigator.cookieEnabled)
        ],
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.localStorage}">Local storage<//>`,
            isSsr ? '…' : getChecked(Boolean(window.localStorage))
        ],
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.sessionStorage}">Session storage<//>`,
            isSsr ? '…' : getChecked(Boolean(window.sessionStorage))
        ],
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.indexeddb}">IndexedDB<//>`,
            isSsr ? '…' : getChecked(Boolean(window.indexedDB))
        ],
        [
            html`<${ExtLink} theme="white" href="${mdnLinks.opfs}">Origin private file system<//>`,
            isSsr ? '…' : getChecked(hasOPFS)
        ],
    ];

    return html`
        <div class="${b()}">
            <${List} items="${items}" />

            <div class="${b('features')}">
                <${StorageFeatures}><//>
            </div>
        </div>
    `;
}
