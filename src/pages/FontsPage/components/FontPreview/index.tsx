import { h } from 'preact';
import { block } from '../../../../utils/css/bem';
import { addFont } from './utils';

import './index.css';
import { useCallback, useState } from 'preact/hooks';
import { i18n } from '../../../../i18n';
import { RadioButtonProps } from '../../../../components/ui/RadioButton';
import { RadioButtons } from '../../../../components/ui/RadioButtons';

interface FontPreviewProps {
    fullName: string;
    postscriptName: string;
}

const b = block('font-preview');

const letters = 'A B C D E F G H I K L M N O P Q R S T V X Y Z';
const digits = '1 2 3 4 5 6 7 8 9 0';

export function FontPreview(props: FontPreviewProps) {
    const buttons: RadioButtonProps[] = [
        {
            text: i18n('Small'),
            value: 'small',
        },
        {
            text: i18n('Medium'),
            value: 'medium',
            selected: true
        },
        {
            text: i18n('Big'),
            value: 'big',
        }
    ];

    const [ fontSize, setFontSize ] = useState('medium');

    const handleSelect = useCallback((value: string) => {
        setFontSize(value);
    }, []);

    addFont(props.fullName, props.postscriptName);

    const style = `font-family: "${props.fullName}"`;
    return (<div class={b()}>
        <RadioButtons label={i18n('Font size:')} size="s" buttons={buttons} onSelect={handleSelect} />
        <div class={b('preview', { size: fontSize })} style={style}>
            <div class={b('line')}>{letters}</div>
            <div class={b('line', { lowercase: true })}>{letters}</div>
            <div class={b('line')}>{digits}</div>
        </div>
    </div>);
}
