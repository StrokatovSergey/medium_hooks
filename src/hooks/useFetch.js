import axios from 'axios';
import {useEffect, useState} from 'react';

export default url => {
    const BASE_URL = 'https://conduit.productionready.io/api'
    const [responce, setResponce] = useState(false)
    const [isLoading, setisLoading] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = (options = {}) => {
        setOptions(options)
        setisLoading(true)
    }

    useEffect(() => {
        if (!isLoading) {
            return
        }
        axios(BASE_URL+url, options ).then(res => {
            setResponce(res)
            console.log('success', res);
            setisLoading(false)
        }).catch(err => {
            setError(err)
            console.log('my catched error', err);
            setisLoading(false)
        })
    }, [isLoading] )

    return [{responce, isLoading, error}, doFetch]
}
