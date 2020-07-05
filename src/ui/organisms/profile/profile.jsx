import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { ButtonExit } from '@ui/atoms';

export const Profile = ({ login, mail, img, city }) => (
    <div className='profile'>
        <div className="profile__inner-wrapper">
            <header className='profile__header'>
                <div className='profile__title'>
                    <img className='profile__img' src={img} alt='Изображение профиля пользователя' />
                    <div className='profile__login'>{login}</div>
                </div>
                <div className='profile__navbar'>
                    <ul className='profile__nav-list'>
                        <li className='profile__nav-list-item'>Информация</li>
                        <li className='profile__nav-list-item'>
                            <ButtonExit>Выход</ButtonExit>
                        </li>
                    </ul>
                </div>
            </header>
            <div className='profile__info'>
                <div className='profile__info-item'>
                    <div className='profile__info-item-title'>Email</div>
                    <div className='profile__info-item-description'>{mail}</div>
                </div>
                <div className='profile__info-item'>
                    <div className='profile__info-item-title'>Город</div>
                    <div className='profile__info-item-description'>{city}</div>
                </div>
            </div>
        </div>
    </div>
);

Profile.propTypes = {
    login: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,  
    img: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
}