import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const LoginTemplate = ({ children }) => (
    <div className='login'>
        {children[0]}
        <div className="login__body">
            <div className='login__left'>
                {children[1]}
            </div>
            <div className='login__right'></div>
        </div>
    </div>
);

LoginTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};
