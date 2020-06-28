import React from 'react';
import './index.scss';
import { Header, HeaderNavigation } from '../Header';
import { Main } from '../Main';

export function App() {
  return (
    <div className='App'>
      <Header>
        <HeaderNavigation />
      </Header>
      <Main />
    </div>
  );
};
