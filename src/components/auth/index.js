import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useFetch from 'hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';

const Auth = ({match}) => {
    const isLogin = match.path === '/login'
    const pageTitle = isLogin ? 'Sign In' : 'Sign Up'
    const descriptionLink = isLogin ? '/register' : '/login'
    const descriptionText = isLogin ? 'Need an account ?' : 'Have an account ?'
    const apiUrl = isLogin ? '/users/login' : '/users'

    const [username, setUsername] = useState({})
    const [isSuccessSubmit, setIsSuccessSubmit] = useState(false)
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const [{responce, isLoading}, doFetch] = useFetch(apiUrl)
    const [, setToken] = useLocalStorage('token')


    const handleSubmit = (e) => {
        e.preventDefault()
        const user = isLogin ? {email, password} : {username, email, password}
        doFetch({
            method: 'post',
            data: {
                user
            }
        })
    }

    useEffect(() => {
        if (!responce) {
            return
        }
        setToken(responce.data.user.token)
        setIsSuccessSubmit(true)

    }, [responce, setToken])

    if (isSuccessSubmit) {
        return <Redirect to="/"/>
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <div className="text-xs-center">{pageTitle}</div>
                        <p className="text-xs-center">
                            <Link to={descriptionLink}>{descriptionText}</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            {!isLogin && (
                                <fieldset className="form-group">
                                <input
                                    type="test"
                                    className={"form-control form-control-lg"}
                                    placeholder="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </fieldset>
                            )}
                            <fieldset className="form-group">
                                <input
                                    type="email"
                                    className={"form-control form-control-lg"}
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    type="password"
                                    className={"form-control form-control-lg"}
                                    placeholder="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </fieldset>
                            <button
                                className="btn btn-lg btn-primary pull-xs-right"
                                type="submit"
                                disabled={isLoading}
                            >{pageTitle}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
