import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { 
    Logo
} from '@ui/atoms';
import { 
    NavLinkBordered,
    NavLinkColored
} from '@ui/molecules';
import { Link } from 'react-router-dom';

export const MainHeader = ({ isAuth, path }) => (
    <header className='main-header'>
        <nav className='main-header__navbar'>
            <ul className='main-header__nav-list'>
                <li className='main-header__nav-list-item'>
                    <Link to='/'>
                        <Logo className='main-header__logo' />
                    </Link>
                </li>
                <li className='main-header__nav-list-item'>
                    <ul className='main-header__nav-list'>
                        <li className='main-header__nav-list-item'>
                            <NavLinkBordered 
                                to='/'
                                active={path === '/'}
                            >
                                Главная
                            </NavLinkBordered>
                        </li>
                        <li className='main-header__nav-list-item'>
                            <NavLinkBordered 
                                to='/news'
                                active={path === '/news'}
                            >
                                Новости
                            </NavLinkBordered>
                        </li>
                    </ul>
                </li>
                <li className='main-header__nav-list-item'>
                    {isAuth ? (
                        <NavLinkColored 
                            to='/profile'
                            active={path === '/profile'}
                        >
                            Профиль
                        </NavLinkColored>
                    ) : (
                        <NavLinkBordered 
                            to='/login'
                            active={path === '/login'}
                        >
                            Войти
                        </NavLinkBordered>
                    )}
                </li>
            </ul>
        </nav>
    </header>
);

MainHeader.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired
}