import { h } from 'preact';
import { block } from '../../../../utils/css/bem';
import { TreeList } from '../../../../components/TreeList';
import { isSsr } from '../../../../utils/isSsr';

const b = block('connection-navigator');

export function ConnectionNavigator() {
    if (isSsr || !navigator.connection) {
        return null;
    }

    const { connection } = navigator;

    const data: Navigator['connection'] = {
        downlink: connection.downlink,
        effectiveType: connection.effectiveType,
        rtt: connection.rtt,
        saveData: connection.saveData,
    };

    if ('type' in connection) {
        data.type = connection.type;
    }

    if ('downlinkMax' in connection) {
        data.downlinkMax = connection.downlinkMax;
    }

    return (
        <div class={b()}>
            <TreeList title="navigator.connection" data={data} />
        </div>
    );
}