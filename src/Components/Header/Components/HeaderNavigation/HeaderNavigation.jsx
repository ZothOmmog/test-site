import React from 'react';
import logo from '../../../../img/logo.png';
import './index.scss';
import { LinkCustom } from '../../../LinkCustom';
import { Navigation } from '../../../Navigation';

export function HeaderNavigation() {
  return (
    <Navigation>
      <LinkCustom 
        className='Navigation__Item'
        type='withoutActive'
        to='/'
      >
        <img className='Navigation__Logo' src={logo} alt='Логотип' />
      </LinkCustom>
      <Navigation>
          <LinkCustom
            className='Navigation__Item'
            to='/' 
            type='transparent'
            radius='lg'
            width='fixed'
            active='borderGreen'
          >
            Главная
          </LinkCustom>
          <LinkCustom 
            className='Navigation__Item'
            to='/news' 
            type='transparent'
            radius='lg'
            width='fixed'
          >
            Новости
          </LinkCustom>
      </Navigation>
      <LinkCustom 
        className='Navigation__LogIn'
        to='/login' 
        type='green'
        radius='lg'
        width='fixed'
      >
        Вход
      </LinkCustom>
    </Navigation>
  );
}