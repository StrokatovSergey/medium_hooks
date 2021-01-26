import React, {useContext} from 'react';
import { NavLink} from 'react-router-dom';
import {CurrentUserContext} from '../../../context/currentUser';

const TopBar = () => {
    const [stateUserContext, ] = useContext(CurrentUserContext)
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <NavLink to="/" className="navbar-brand">medium</NavLink>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    {!stateUserContext.isLoggedIn && (
                        <>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
                                    Sign in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">
                                    Sign up
                                </NavLink>
                            </li>
                        </>
                    )}
                    {stateUserContext.isLoggedIn && (
                        <>
                            <li className="nav-item">
                                <NavLink to="/acticles/new" className="nav-link">
                                    <i className="ion-compose"> </i>
                                    &nbsp; New Post
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/profiles/${stateUserContext.currentUser.username}`} className="nav-link">
                                    <img src={`${stateUserContext.currentUser.image}`} alt="" className="user-pic"/>
                                    &nbsp;
                                    {stateUserContext.currentUser.username}
                                </NavLink>
                            </li>
                        </>
                    )}

                </ul>
            </div>
        </nav>
    );
};

export default TopBar;
