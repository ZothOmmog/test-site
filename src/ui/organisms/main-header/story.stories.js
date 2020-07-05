import React from 'react';
import { MainHeader } from './main-header';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: 'MainHeader',
    components: MainHeader
}

export const WithAuthMain = () => (
    <Router>
        <MainHeader isAuth={true} path='/' />
    </Router>
);
export const WithAuthNews = () => (
    <Router>
        <MainHeader isAuth={true} path='/news' />
    </Router>
);
export const WithAuthProfile = () => (
    <Router>
        <MainHeader isAuth={true} path='/profile' />
    </Router>
);

export const WithoutAuthLogin = () => (
    <Router>
        <MainHeader isAuth={false} path='/login' />
    </Router>
);