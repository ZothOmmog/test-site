import React from 'react';
import { MainTemplate } from './main';
import { MainBody } from '@ui/molecules';
import { MainHeader } from '@ui/organisms';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: 'MainTemplate',
    component: MainTemplate
}

export const WithoutAuth = () => (
    <Router>
        <MainTemplate>
            <MainHeader isAuth={false} path='/' />
            <MainBody />
        </MainTemplate>
    </Router>
);

export const WithAuth = () => (
    <Router>
        <MainTemplate>
            <MainHeader isAuth={true} path='/' />
            <MainBody />
        </MainTemplate>
    </Router>
);