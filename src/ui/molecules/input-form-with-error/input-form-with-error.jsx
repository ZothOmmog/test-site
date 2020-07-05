import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './style.scss';
import { InputForm } from '@ui/atoms';

export const InputFormWithError = ({ type, error, ...otherStyles }) => (
    <>
    <InputForm
        type={type}
        className={ClassNames({ 'input-form_error': error })}
        {...otherStyles}
    />
    {error ? (
        <div className='input-form__error-message'>{error}</div>
    ) : null}
    </>
);

InputFormWithError.propTypes = {
    type: PropTypes.oneOf('text', 'password').isRequired,
    error: PropTypes.string
}
