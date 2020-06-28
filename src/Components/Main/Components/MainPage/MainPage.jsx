import React from 'react';
import './index.scss';
import logo from './img/bigLogo.png';

export function MainPage() {
  return (
    <div className='MainPage'>
      <div className="MainPage__WrapperLogo">
        <img className='MainPage__Logo' src={logo} alt="Логотип"/>
      </div>
      <h1 className='MainPage__Title'>Мы делаем сайты</h1>
    </div>
  );
}