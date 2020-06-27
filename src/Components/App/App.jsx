import React from 'react';
import './index.scss';
import { Header, HeaderNavigation } from '../Header';

export function App() {
  return (
    <div className='App'>
      <Header>
        <HeaderNavigation />
      </Header>
    </div>
  );
};
