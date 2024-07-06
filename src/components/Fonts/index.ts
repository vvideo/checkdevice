import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';
import { Input } from '../Input';
import { WarningMessage } from '../WarningMessage';

const b = block('fonts');

export function Fonts() {
    // @ts-ignore
    if (!window.queryLocalFonts) {
        return html`<${WarningMessage}>${i18n('Local Font Access API is not supported.')}<//>`;
    }

    const [fonts, setFonts] = useState<any>();
    const [filter, setFilter] = useState<string>('');

    const handleClick = useCallback(() => {
        // @ts-ignore
        window.queryLocalFonts().then(fontData => {
            setFonts(fontData);
        });
    }, []);

    const handleChange = useCallback((value: string) => {
        setFilter(value);
    }, []);

    const items = (fonts || []).filter((item: any) => {
        return item.fullName.indexOf(filter) !== -1;
    });

    return html`
        <div class="${b()}">
            ${fonts ? '' : html`<${Button} theme="active" onClick="${handleClick}">${i18n('Request')}<//>`}
            ${fonts ? html`<${Input} placeholder="${i18n('Filter')}" value="" onChange="${handleChange}" //>` : ''}

            <ul class="${b('list')}">
                ${fonts ? items.map((item: any, i: number) => {
                    return html`<li>${i + 1}. ${item.fullName}</li>`;
                }) : undefined}
            </ul>
        </div>
    `;
}