import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { Mouse } from '../../components/Mouse';
import { Keyboard } from '../../components/Keyboard';
import { RadioButtons } from '../../components/RadioButtons';
import { RadioButtonProps } from '../../components/RadioButton';

import './index.css';
import { block } from '../../utils/bem';

const buttons: RadioButtonProps[] = [
    {
        text: i18n('Mouse'),
        value: 'mouse',
        selected: true,
    },
    {
        text: i18n('Keyboard'),
        value: 'keyboard',
    },
];

const b = block('input-page');

export function InputPage() {
    const [selectedValue, setSelectedValue] = useState<string>('mouse');

    const handleSelect = useCallback((value: string) => {
        setSelectedValue(value);
    }, []);


    return html`
        <${Page}>
            <${Header}>
                ${i18n('Mouse and keyboard')}
            <//>

            <${RadioButtons} className="${b('controls')}" onSelect="${handleSelect}" buttons="${buttons}" //>

            ${selectedValue === 'mouse' ? html`<${Mouse} //>` : html`<${Keyboard} //>`}
        <//>`;
}
