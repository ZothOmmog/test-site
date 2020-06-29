import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from '../MainPage';
import { Login } from '../Login';
import { News } from '../News';
import { ProfileView } from '../Profile';
import { connect } from 'react-redux';



export function RoutesWithoutState({ isAuth }) {
  return (
    <Switch>
      {isAuth ? (
        <Redirect from='/login' to='/profile' />
      ): null}
      <Route exact path='/'>
        <MainPage />
      </Route>
      <Route path='/news'>
        <News />
      </Route>
      <Route path='/profile'>
        <ProfileView />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.me.isAuth
});

export const Routes = connect(mapStateToProps)(RoutesWithoutState);