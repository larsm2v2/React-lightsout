import { useState } from 'react';


export function useGlobalState(defaultValues) {
    const [state, setState] = useState(defaultValues);

    function createSetter(key) {
        return function setter(value) {
            setState(prevState => ({
                ...prevState,
                [key]: value
            }));
        };
    }

    return Object.keys(defaultValues).reduce((acc, key) => {
        acc[key] = [state[key], createSetter(key)];
        return acc;
    }, {});
}