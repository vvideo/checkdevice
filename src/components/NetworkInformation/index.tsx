import { h } from 'preact';
import { block } from '../../utils/css/bem';
import { ConnectionNavigator } from '../../pages/NetworkPage/components/ConnectionNavigator';
import { IP } from '../IP';

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