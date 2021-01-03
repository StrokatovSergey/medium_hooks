import React from 'react';
import {Switch, Route} from 'react-router-dom'
import GlobalFeed from '../../pages/globalFeed';
import Article from '../../pages/article';
import Auth from '../auth';

const Routes = () => {
    return (
            <Switch>
                <Route exact path={'/'} component={GlobalFeed}/>
                <Route exact path={'/login'} component={Auth}/>
                <Route exact path={'/register'} component={Auth}/>
                <Route path={'/articles/:slug'} component={Article}/>
            </Switch>
    );
};

export default Routes;
