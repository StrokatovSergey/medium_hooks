import {useState, useEffect} from 'react';

export default (key, initialValue = '') => {
    const [value, setValue] = useState(() => (
            localStorage.getItem(key) || initialValue
        ))

    useEffect(() => {
        console.log('useLocalStorage');
        localStorage.setItem(key, value)
    }, [value])

    return [value, setValue]
}
