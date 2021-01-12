import React from 'react';
import Routes from 'components/routes';
import {BrowserRouter} from 'react-router-dom';
import TopBar from 'components/includes/top-bar/index.js';
import {CurrentUserProvider} from './context/currentUser';
import CurrentUserChecker from './components/current-user-checker/CurrentUserChecker';

const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <div className="App">
                    App
                    <BrowserRouter>
                        <TopBar/>
                        <Routes/>
                    </BrowserRouter>
                </div>
            </CurrentUserChecker>
        </CurrentUserProvider>
    );
};

export default App;
