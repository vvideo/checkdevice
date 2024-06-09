import { html } from 'htm/preact';
import { block } from '../../utils/bem';
import { ScreenSimpleProps, ScreenSimple } from '../ScreenSimple';
import { getDevicePixelRatio } from 'detect-audio-video';
import { getColorSpaces } from '../../utils/getColorSpaces';
import { Header } from '../Header';
import { i18n } from '../../i18n/i18n';

export interface ScreenList {
    items: ScreenSimpleProps[];
}

const b = block('screen-list');

export function ScreenList() {
    const items: ScreenSimpleProps[] = [
        {
            index: 0,
            label: '',
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth,
            devicePixelRatio: getDevicePixelRatio(),
            colorSpaces: getColorSpaces(),
            orientation: screen.orientation?.type,
            isExtended: screen.isExtended,
        },
    ]

    return html`<div class="${b()}">
        <${Header}>
            ${items.length === 1 ? i18n('Screen') : i18n('Screens')}
        <//>

        ${
            items.map(item => {
                return html`<${ScreenSimple} ...${item}><//>`;
            })
        }
    </div>`;
}
