import { html } from 'htm/preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { RadioButtons, RadioButtonsProps } from '../ui/RadioButtons';
import { prepareAdapterFeatures, prepareAdapterInfo, prepareAdapterLimits } from './utils';
import { WarningMessage } from '../ui/WarningMessage';
import { block } from '../../utils/css/bem';
import { TreeList } from '../TreeList';
import { i18n } from '../../i18n';
import { isSsr } from '../../utils/isSsr';

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
        setPowerPreference(value);
    }, []);

    useEffect(() => {
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

    const data = {
        info: prepareAdapterInfo(refAdapterInfo.current),
        isFallbackAdapter: refAdapter.current && refAdapter.current.isFallbackAdapter,
        limits: prepareAdapterLimits(refAdapter.current && refAdapter.current.limits),
        features: prepareAdapterFeatures(refAdapter.current && refAdapter.current.features),
    };

    if (!isSsr && !navigator.gpu) {
        return html`<${WarningMessage}>${i18n('WebGPU is not supported.')}<//>`;
    }

    if (hasAdapter === null) {
        return html`<${WarningMessage}>${i18n('GPU Adapter is not found.')}<//>`;
    }

    return hasAdapter ? html`
        <div class="${b()}">
            <div class="${b('controls')}">
                <${RadioButtons}
                    label="Power preference:"
                    buttons="${buttons}"
                    onSelect="${onSelect}"
                ><//>
            </div>

            <${TreeList} title="Adapter" data=${data}><//>
        </div>
    ` : '...';
}