import React from 'react';
import Routes from 'components/routes';
import {BrowserRouter} from 'react-router-dom';
import TopBar from 'components/includes/top-bar/index.js';
import {CurrentUserProvider} from './context/currentUser';

const App = () => {
    return (
        <CurrentUserProvider>
            <div className="App">
                App
                <BrowserRouter>
                    <TopBar/>
                    <Routes/>
                </BrowserRouter>
            </div>
        </CurrentUserProvider>
    );
};

export default App;
