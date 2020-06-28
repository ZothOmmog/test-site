import React from 'react';
import './index.scss';

export function Header({ children }) {
  return (
    <header className='Header'>
        <div className="Header__innerWrapper">
          {children}
        </div>
      </header>
  );
}