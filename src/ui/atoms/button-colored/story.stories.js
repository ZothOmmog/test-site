import React from 'react';
import { ButtonColored } from './button-colored';

export default {
    title: 'ButtonColored',
    component: ButtonColored
}

export const Regular = () => (
    <ButtonColored onClick={() => console.log('Попытка входа в аккаунт')}>
        Войти
    </ButtonColored>
);

export const Disabled = () => (
    <ButtonColored disabled={true} onClick={() => console.error('Произошёл клик по неактивной кнопке')} >
        Войти
    </ButtonColored>
);