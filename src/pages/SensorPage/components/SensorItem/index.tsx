import { h } from 'preact';

import { ShowHide } from '../ShowHide';
import { useCallback, useState } from 'preact/hooks';
import { block } from '../../../../utils/css/bem';

import './index.css';

interface SensorItemProps {
    title: string;
    description: string;
    hasSupport: boolean;
    Component: (props: { onError: (error: SensorErrorEvent) => void }) => h.JSX.Element | null;
}

const b = block('sensor-item');

function getEmoji(hasError: boolean, hasSupport: boolean) {
    if (!hasSupport) {
        return ' ⚠️';
    }

    if (hasError) {
        return ' ❌';
    }

    return '';
}

export function SensorItem(props: SensorItemProps) {
    const { title, description, hasSupport, Component } = props;

    const [error, setError] = useState<SensorErrorEvent | null>(null);

    const handleError = useCallback((error: SensorErrorEvent) => {
        setError(error);
    }, [setError]);

    const postfix = getEmoji(Boolean(error), hasSupport);

    return (
        <div class={b({ supported: hasSupport })}>
            <ShowHide
                title={title}
                postfix={postfix}
                description={description}
            >
                <Component onError={handleError} />
            </ShowHide>
        </div>
    );
}
