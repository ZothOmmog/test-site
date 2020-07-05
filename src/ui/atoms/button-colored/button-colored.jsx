import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

export const ButtonColored = ({ children, className, disabled, onClick, ...outherProps }) => (
  
  <button
    className={classNames(
        'button-colored',
        { 'button-colored_disabled': disabled },
        { [className]: className }
    )}
    disabled={disabled}
    onClick={onClick}
    {...outherProps}
  >
    {children}
  </button>
);

ButtonColored.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};