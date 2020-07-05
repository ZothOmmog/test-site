import React from 'react';
import './style.scss';
import { Logo } from '@ui/atoms';

export const MainBody = () => (
    <div className='main'>
        <div className='main__wrapper-logo'>
            <Logo />
        </div>
        <h1 className='main__title'>Мы делаем сайты</h1>
    </div>
);
