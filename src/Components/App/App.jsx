import React from 'react';
import './index.scss';
import { Header } from '../Header';
import { NavigationView } from '../Navigation';

export function App() {
  return (
    <div className='App'>
      <Header>
        <NavigationView isAuth={false} />
      </Header>
    </div>
  );
};
