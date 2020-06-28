import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from '../MainPage';
import { Login } from '../Login';
import { News } from '../News/News';
import { ProfileView } from '../Profile/Profile';

export function Routes() {
  return (
      <Switch>
        <Route path='/profile' component={ProfileView} />
        <Route path='/login' component={Login} />
        <Route path='/news' component={News} />
        <Route path='/' component={MainPage} />
      </Switch>
  );
}