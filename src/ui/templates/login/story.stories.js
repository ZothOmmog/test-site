import React from 'react';
import { LoginTemplate } from './login';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainHeader } from '@ui/organisms';

export default {
    title: 'LoginTemplate',
    component: LoginTemplate
}

export const LoginPage = () => (
    <Router>
        <LoginTemplate>
            <MainHeader isAuth={false} path='/login' />
            <div>Тут будет форма авторизации</div>
        </LoginTemplate>
    </Router>
);