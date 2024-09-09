import { useRef, useCallback } from 'react';

const useThrottle = (callback, limit) => {
    const inThrottle = useRef(false);

    return useCallback((...args) => {
        if (!inThrottle.current) {
            callback(...args);
            inThrottle.current = true;
            setTimeout(() => {
                inThrottle.current = false;
            }, limit);
        }
    }, [callback, limit]);
};

export default useThrottle;