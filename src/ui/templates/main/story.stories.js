import React from 'react';
import { MainPage } from './main';
import { MainBody } from '@ui/molecules';
import { MainHeader } from '@ui/organisms';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: 'MainPage',
    component: MainPage
}

export const WithoutAuth = () => (
    <Router>
        <MainPage
            Header={MainHeader}
            MainBody={MainBody}
        />
    </Router>
);