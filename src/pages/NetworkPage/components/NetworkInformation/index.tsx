import { h } from 'preact';
import { block } from '../../../../utils/css/bem';
import { ConnectionNavigator } from '../ConnectionNavigator';
import { IP } from '../../../../components/IP';

import './index.css';

const b = block('network-information');

export function NetworkInformation() {
    return (
        <div class={b()}>
            <div>
                <IP />
                <ConnectionNavigator />
            </div>
        </div>
    );
}