import { useCallback, useState } from 'preact/hooks';

export const useForceUpdate = () => {
    const [, updateState] = useState({});

    return useCallback(() => updateState({}), []);
}
