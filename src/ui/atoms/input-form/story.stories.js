import React from 'react';
import { InputForm } from './input-form';

export default {
    title: 'InputForm',
    component: InputForm
}

export const Text = () => (
    <InputForm 
        type='text'
        placeholder='Логин'
    />
);

export const Password = () => (
    <InputForm 
        type='password'
        placeholder='Пароль'
    />
);