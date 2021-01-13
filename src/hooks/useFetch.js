import axios from 'axios';
import {useEffect, useState} from 'react';
import useLocalStorage from './useLocalStorage';

const useFetch = url => {
    const BASE_URL = 'https://conduit.productionready.io/api'
    const [response, setResponce] = useState(false)
    const [isLoading, setisLoading] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})
    const [token] = useLocalStorage('token')

    const doFetch = (options = {}) => {
        setOptions(options)
        setisLoading(true)
    }

    useEffect(() => {
        if (!isLoading) {
            return
        }
        const requestOptions = {
            ...options,
            ...{
                headers: {
                    authorization: token ? `Token ${token}` : ``
                }
            }
        }
        axios(BASE_URL+url, requestOptions ).then(res => {
            setResponce(res.data)
            console.log('success', res);
            setisLoading(false)
        }).catch(err => {
            setError(err.response.data)
            console.log('my catched error', err);
            setisLoading(false)
        })
    }, [isLoading, url, options, token] )

    return [{response, isLoading, error}, doFetch]
}


export default useFetch
