import { html } from 'htm/preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { List } from '../List';
import { RadioButtons, RadioButtonsProps } from '../RadioButtons';
import { prepareAdapterFeatures, prepareAdapterInfo, prepareAdapterLimits } from './utils';
import { WarningMessage } from '../WarningMessage';
import { block } from '../../utils/bem';

import './index.css';

const buttons: RadioButtonsProps['buttons'] = [
    {
        text: 'Low power',
        value: 'low-power',
    },
    {
        text: 'High performance',
        value: 'high-performance',
        selected: true,
    },
];

const b = block('gpu-navigator');

export function GpuNavigator() {
    const [hasAdapter, setAdapter] = useState(false);
    const [_, setAdapterInfo] = useState(false);
    const [powerPreference, setPowerPreference] = useState<GPUPowerPreference>('high-performance');

    const refAdapter = useRef<GPUAdapter | null>();
    const refAdapterInfo = useRef<GPUAdapterInfo | null>();

    const onSelect = useCallback((value: GPUPowerPreference) => {
        console.log('onSelect')
        setPowerPreference(value);
    }, []);

    console.log('render');

    useEffect(() => {
        console.log('useEffect');
        if (!navigator.gpu) {
            return;
        }

        navigator.gpu.requestAdapter({ powerPreference }).then(adapter => {
            refAdapter.current = adapter;
            setAdapter(true);

            if (!adapter) {
                return;
            }

            if (adapter.info) {
                refAdapterInfo.current = adapter.info;
                setAdapterInfo(true);
                return;
            }

            // Fallback
            adapter.requestAdapterInfo().then(adapterInfo => {
                refAdapterInfo.current = adapterInfo;
                setAdapterInfo(true);
            }).catch((error: Error) => {
                console.error(error);
            });
        }).catch((error: Error) => {
            console.error(error);
        });
    }, [powerPreference]);

    const limitsItems = prepareAdapterLimits(refAdapter.current && refAdapter.current.limits);
    const featuresItems = prepareAdapterFeatures(refAdapter.current && refAdapter.current.features);
    const adapterInfoItems = prepareAdapterInfo(refAdapterInfo.current);

    if (!navigator.gpu) {
        return html`<${WarningMessage}>WebGPU is not supported.<//>`;
    }

    if (hasAdapter === null) {
        return html`<${WarningMessage}>GPU Adapter is not found.<//>`;
    }

    return hasAdapter ? html`
        <div>
            <div class="${b('controls')}">
                <${RadioButtons}
                    label="Power preference: "
                    buttons="${buttons}"
                    onSelect="${onSelect}"
                ><//>
            </div>

            <div>isFallbackAdapter: ${String(refAdapter.current && refAdapter.current.isFallbackAdapter)}</div>

            <${List} title="Adapter Info" items="${adapterInfoItems}"></>
            <${List} title="Features" items="${featuresItems}"></>
            <${List} title="Limits" items="${limitsItems}"></>
        </div>
    ` : '...';
}