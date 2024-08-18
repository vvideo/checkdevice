import { h } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { Button } from '../../../../components/ui/Button';
import { Checkbox } from '../../../../components/ui/Checkbox';
import { Input } from '../../../../components/ui/Input';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { filterFonts } from './utils';
import { FontList } from '../FontList';
import { FontListGrouped } from '../FontListGrouped';
import { isSsr } from '../../../../utils/isSsr';

import './index.css';

const b = block('fonts');

export function Fonts() {
    if (!isSsr && !window.queryLocalFonts) {
        return (<WarningMessage>{i18n('Local Font Access API is not supported.')}</WarningMessage>);
    }

    const [fonts, setFonts] = useState<FontData[]>();
    const [filter, setFilter] = useState<string>('');
    const [groupByFamily, setGroupByFamily] = useState(true);

    const handleButtonClick = useCallback(() => {
        if (!window.queryLocalFonts) {
            return;
        }

        window.queryLocalFonts().then(fontData => {
            setFonts(fontData);
        }).catch(e => {
            console.error(e);
        });
    }, []);

    useEffect(() => {
        handleButtonClick();
    }, []);

    const handleCheckboxClick = useCallback((value: boolean) => {
        setGroupByFamily(value);
    }, []);

    const handleChange = useCallback((value: string) => {
        setFilter(value);
    }, []);

    const items = filterFonts(fonts || [], filter);

    return (
        <div class={b()}>
            <div class={b('controls')}>
                {fonts ? '' : (<Button theme="active" onClick={handleButtonClick}>{i18n('Request fonts')}</Button>)}
                {fonts ? (<Input class={b('filter')} placeholder={i18n('Filter')} value="" onChange={handleChange} />) : ''}
                {fonts ? (<div class={b('group-by-family')}><Checkbox onClick={handleCheckboxClick} label={i18n('Group by family')} checked={groupByFamily} /></div>) : ''}
            </div>
            {groupByFamily ? (<FontListGrouped items={items} />) : (<FontList items={items} />)}
        </div>
    );
}
