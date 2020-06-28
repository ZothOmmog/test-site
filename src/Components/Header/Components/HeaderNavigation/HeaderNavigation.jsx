import React from 'react';
import logo from '../../../../img/logo.png';
import { LinkCustom } from '../../../LinkCustom';
import { Navigation } from '../../../Navigation';
import { useLocation } from 'react-router-dom';

export function HeaderNavigation() {
  const location = useLocation();

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
            active={ location.pathname === '/' ? 'borderGreen' : null }
            radius='lg'
            width='fixed'
          >
            Главная
          </LinkCustom>
          <LinkCustom 
            className='Navigation__Item'
            to='/news' 
            type='transparent'
            active={ location.pathname === '/news' ? 'borderGreen' : null }
            radius='lg'
            width='fixed'
          >
            Новости
          </LinkCustom>
      </Navigation>
      <Navigation>
      <LinkCustom 
        className='Navigation__LogIn'
        to='/profile' 
        type='transparent'
        active={ location.pathname === '/profile' ? 'borderGreen' : null }
        radius='lg'
        width='fixed'
      >
        Профиль
      </LinkCustom>
      <LinkCustom 
        className='Navigation__LogIn'
        to='/login' 
        active={ location.pathname === '/login' ? 'borderBlack' : null }
        type='green'
        radius='lg'
        width='fixed'
      >
        Вход
      </LinkCustom>
      </Navigation>
    </Navigation>
  );
}