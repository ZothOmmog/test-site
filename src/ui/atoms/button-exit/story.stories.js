import React from 'react';
import { ButtonExit } from './button-exit';

export default {
    title: 'ButtonExit',
    component: ButtonExit
}

export const Regular = () => (
    <ButtonExit
        onClick={() => console.log('Выход из аккаунта')}
    >
        Выход
    </ButtonExit>
);