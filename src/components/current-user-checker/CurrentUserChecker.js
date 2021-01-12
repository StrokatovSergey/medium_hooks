import React, {useEffect, useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import {CurrentUserContext} from '../../context/currentUser';

const CurrentUserChecker = ({children}) => {

    const [{response}, doFetch] = useFetch('/user')
    const [stateCurrentUserContext, setCurrentUserContext] = useContext(CurrentUserContext)

    useEffect(() => {
        doFetch()
        setCurrentUserContext(state => ({
            ...state,
            isLoading: true
        }))
    },[])

    useEffect(() => {

    })

    return children;
};

export default CurrentUserChecker;
