import { useState } from 'react';

/**
 * Example feature-scoped hook.
 */
export function useExample() {
    const [count, setCount] = useState(0);
    const increment = () => setCount((c) => c + 1);

    return { count, increment };
}
