import React from 'react';
import Routes from 'components/routes';
import {BrowserRouter} from 'react-router-dom';
import TopBar from 'components/includes/top-bar/index.js';

const App = () => {
    return (
        <div className="App">
            App
            <BrowserRouter>
                <TopBar/>
                <Routes/>
            </BrowserRouter>
        </div>
    );
};

export default App;
