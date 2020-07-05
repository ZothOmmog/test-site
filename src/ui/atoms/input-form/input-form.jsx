import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './style.scss';

export const InputForm = ({ type, className, ...otherStyles }) => (
    <input
        type={type}
        className={ClassNames(
            'input-form',
            { [className]: className }
        )}
        {...otherStyles}
    />
);

InputForm.propTypes = {
    type: PropTypes.oneOf('text', 'password').isRequired
}
