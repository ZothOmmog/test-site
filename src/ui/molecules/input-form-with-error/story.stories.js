import React from 'react';
import { InputFormWithError } from './input-form-with-error';

export default {
    title: 'InputFormWithError',
    component: InputFormWithError
}

export const Text = () => (
    <InputFormWithError 
        type='text'
        placeholder='Логин'
    />
);

export const Error = () => (
    <InputFormWithError 
        type='text'
        placeholder='Логин'
        error='Поле обязательно для заполнения'
    />
);