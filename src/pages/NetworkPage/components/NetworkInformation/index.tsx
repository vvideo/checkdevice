import { h } from 'preact';
import { block } from '../../../../utils/css/bem';
import { ConnectionNavigator } from '../ConnectionNavigator';
import { IP } from '../IP';

import './index.css';

const b = block('network-information');

export function NetworkInformation() {
    return (
        <div class={b()}>
            <IP />
            <ConnectionNavigator />
        </div>
    );
}
