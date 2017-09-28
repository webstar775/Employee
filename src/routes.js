import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/LandingPage';
import SignUp from './pages/SignUp';
import ProfilePage from './pages/Profile';
import Category from './pages/Profile/Category';
import Submition from './pages/Profile/Submition';
import Candidate from './pages/Profile/Candidate';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/home" component={ Home } />        
        <Route path="/signup" component={ SignUp } />        
        <Route path="/profile" component={ ProfilePage }>
            <IndexRoute component={ Category } />
            <Route path="/profile/category" component={ Category } />
            <Route path="/profile/submition" component={ Submition } />
            <Route path="/profile/candidate" component={ Candidate } />
        </Route>
    </Route>
)