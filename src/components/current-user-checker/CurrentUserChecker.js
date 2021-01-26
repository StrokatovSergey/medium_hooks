import {useEffect,useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';
import {CurrentUserContext} from '../../context/currentUser';

const CurrentUserChecker = ({children}) => {

    const [token] = useLocalStorage('token')
    const [{response}, doFetch] = useFetch('/user')
    const [, setCurrentUserContext] = useContext(CurrentUserContext)

    useEffect(() => {
        if (!token) {
            setCurrentUserContext(state => ({
                ...state,
                isLoggedIn: false
            }))
            return true
        }

        doFetch()
        setCurrentUserContext(state => ({
            ...state,
            isLoading: true
        }))
    },[token, setCurrentUserContext, doFetch])

    useEffect(() => {
        if (!response) {
            return true
        }
        setCurrentUserContext(state => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: response.user
        }))
    }, [response, setCurrentUserContext])

    return children;
};

export default CurrentUserChecker;
