import React from 'react';
import './index.scss';
import { Header } from '../Header';

export function App() {
  return (
    <div className='App'>
      <Header isAuth={true} />
    </div>
  );
};
