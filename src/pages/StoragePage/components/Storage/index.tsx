import { h } from 'preact';

import { List } from '../../../../components/ui/List';
import { getChecked } from '../../../../utils/string/getChecked';
import { StorageFeatures } from '../StorageFeatures';
import { block } from '../../../../utils/css/bem';
import { ExtLink } from '../../../../components/ui/ExtLink';
import { isSsr } from '../../../../utils/isSsr';
import { ValueInProgress } from '../../../../components/ValueInProgress';

import './index.css';

const mdnLinks = {
    cookies: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled',
    sessionStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage',
    localStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
    sharedStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sharedStorage',
    indexeddb: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    opfs: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system',
};

const b = block('storage');

export function Storage() {
    const hasOPFS = !isSsr && typeof navigator.storage?.getDirectory === 'function';
    const items: [h.JSX.Element, h.JSX.Element | string][] = [
        [
            (<ExtLink theme="page-theme" href={mdnLinks.cookies}>Cookies</ExtLink>),
            isSsr ? (<ValueInProgress />) : getChecked(navigator.cookieEnabled)
        ],
        [
            (<ExtLink theme="page-theme" href={mdnLinks.localStorage}>Local storage</ExtLink>),
            isSsr ? (<ValueInProgress />) : getChecked(Boolean(window.localStorage))
        ],
        [
            (<ExtLink theme="page-theme" href={mdnLinks.sessionStorage}>Session storage</ExtLink>),
            isSsr ? (<ValueInProgress />) : getChecked(Boolean(window.sessionStorage))
        ],
        [
            (<ExtLink theme="page-theme" href={mdnLinks.sharedStorage}>Shared storage</ExtLink>),
            isSsr ?
                (<ValueInProgress />) :
                // @ts-ignore
                getChecked(Boolean(window.sharedStorage))
        ],
        [
            (<ExtLink theme="page-theme" href={mdnLinks.indexeddb}>IndexedDB</ExtLink>),
            isSsr ? (<ValueInProgress />) : getChecked(Boolean(window.indexedDB))
        ],
        [
            (<ExtLink theme="page-theme" href={mdnLinks.opfs}>Origin private file system</ExtLink>),
            isSsr ? (<ValueInProgress />) : getChecked(hasOPFS)
        ],
    ];

    return (
        <div class={b()}>
            <List items={items} />

            <div class={b('features')}>
                <StorageFeatures />
            </div>
        </div>
    );
}
