import React, {createContext, useState} from 'react'

export const CurrentUserContext = createContext([{}, () => {}])

export const CurrentUserProvider = ({children}) => {

    const [state, setState] = useState({
        isLoading: false,
        // мы загружаем юзера или нет
        isLoggedIn: null,
        // знаем ли мы - заглогинин юзер или нет
        currentUser: null
        // responce от бекенда
    })

    return <CurrentUserContext.Provider value={[state, setState]}>
        {children}
    </CurrentUserContext.Provider>
}
