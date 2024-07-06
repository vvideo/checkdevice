import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';

const b = block('fonts');

export function Fonts() {
    const [fonts, setFonts] = useState<any>();

    const handleClick = useCallback(() => {
        // @ts-ignore
        window.queryLocalFonts().then(fontData => {
            setFonts(fontData);
        });
    }, []);

    console.log(fonts);

    return html`
        <div class="${b()}">
            <${Button} theme="active" onClick="${handleClick}">${i18n('Request')}<//>

            <ul class="${b('list')}">
                ${fonts ? fonts.map((item: any, i: number) => {
                    return html`<li>${i + 1}. ${item.fullName}</li>`;
                }) : undefined}
            </ul>
        </div>
    `;
}