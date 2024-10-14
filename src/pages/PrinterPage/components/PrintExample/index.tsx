import { h } from 'preact';
import { block } from '../../../../utils/css/bem';
import { Button } from '../../../../components/ui/Button';
import { i18n } from '../../../../i18n';

import './index.css';
import { useCallback } from 'preact/hooks';

const b = block('print-example');

export function PrintExample() {
    const handleClick = useCallback(() => {
        window.print();
    }, []);

    return (
        <div class={b()}>
            <Button class={b('button')} onClick={handleClick}>{i18n('Print')}</Button>

            <p class={b('paragraph')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <img class={b('image')} src="/static/images/printer_test.jpg" width="640" />
        </div>
    );
}
