import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';

export const Logo = ({ className }) => (
    <img className={className} src={logo} alt="Логотип компании"/>
);

Logo.propTypes = {
    className: PropTypes.string
};